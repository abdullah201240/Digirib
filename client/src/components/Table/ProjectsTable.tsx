'use client';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    link: string;
    image?: string; // Image URL or path
}

export default function ProjectsTable() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [formValues, setFormValues] = useState<Omit<Project, 'id'>>({
        title: '',
        link: '',
        image: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null); // Separate state for file uploads

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}admin/projects`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setProjects(data.data || []);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}admin/projects/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
                    },
                }
            );

            if (response.ok) {
                setProjects((prev) => prev.filter((project) => project.id !== id));
                setShowConfirm(false);
            } else {
                console.error('Failed to delete project');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const handleEdit = (project: Project) => {
        setCurrentProject(project);
        setFormValues({
            title: project.title,
            link: project.link,
            image: project.image || '',
        });
        setImageFile(null); // Reset the image file
        setIsModalOpen(true);
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formValues.title);
        formData.append('link', formValues.link);

        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}admin/projects/${currentProject?.id}`,
                {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                const updatedProject = await response.json();
                setProjects((prev) =>
                    prev.map((project) =>
                        project.id === updatedProject.id ? updatedProject : project
                    )
                );
                setIsModalOpen(false);
            } else {
                console.error('Failed to update project');
            }
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImageFile(file);
    };

    return (
        <div>
            <h1>Projects</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Link</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.title}</td>
                                <td>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.link}
                                    </a>
                                </td>
                                <td>
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(project)}>
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDeleteId(project.id);
                                            setShowConfirm(true);
                                        }}
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {isModalOpen && (
                <div>
                    <h2>Edit Project</h2>
                    <form onSubmit={handleUpdate}>
                        <label>
                            Title:
                            <input
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Link:
                            <input
                                type="text"
                                name="link"
                                value={formValues.link}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Image:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                        <button type="submit">Update</button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}

            {showConfirm && deleteId !== null && (
                <div>
                    <p>Are you sure you want to delete this project?</p>
                    <button onClick={() => handleDelete(deleteId)}>Yes</button>
                    <button onClick={() => setShowConfirm(false)}>No</button>
                </div>
            )}
        </div>
    );
}
