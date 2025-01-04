import React, { useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

interface Services {
  id: number;
  name: string;
  subTitle: string;
  image: string;
  backgroundImage: string;
}

const ServicesTable = () => {
  const router = useRouter();
  const [mainServices, setMainServices] = useState<Services[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Services | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newBackgroundImage, setNewBackgroundImage] = useState<File | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const storedUserInfo = localStorage.getItem('sessionToken');
      if (!storedUserInfo) {
        toast.error('Session expired. Redirecting to login...');
        router.push('/admin/login');
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}admin/auth/me`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${storedUserInfo}`,
            },
          }
        );

        if (!response.ok) {
          toast.error('Unauthorized access. Redirecting to login...');
          router.push('/admin/login');
          return;
        }

        const teamResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}admin/services`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${storedUserInfo}`,
            },
          }
        );

        if (teamResponse.ok) {
          const data = await teamResponse.json();
          if (Array.isArray(data)) {
            setMainServices(data);
            toast.success('Services loaded successfully!');
          } else {
            toast.error('Unexpected response format.');
          }
        } else {
          toast.error('Failed to fetch services.');
        }
      } catch (error) {
        if(error)
        toast.error('An error occurred while checking session.');
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleDelete = async (id: number) => {
    const storedUserInfo = localStorage.getItem('sessionToken');
    if (!storedUserInfo) {
      toast.error('Session expired. Redirecting to login...');
      router.push('/admin/login');
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}admin/services/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${storedUserInfo}`,
          },
        }
      );

      if (response.ok) {
        setMainServices(mainServices.filter((mainService) => mainService.id !== id));
        toast.success('Service deleted successfully!');
        setShowConfirm(false);
      } else {
        toast.error('Failed to delete Service.');
      }
    } catch (error) {
        if(error)
      toast.error('An error occurred while deleting the Service.');
    }
  };

  const handleEdit = async () => {
    if (selectedService) {
      const formData = new FormData();
      formData.append('name', selectedService.name);
      formData.append('subTitle', selectedService.subTitle);
  
      // Only append images if they're selected
      if (newImage) {
        formData.append('image', newImage);
      }
  
      if (newBackgroundImage) {
        formData.append('backgroundImage', newBackgroundImage);
      }
  
      const storedUserInfo = localStorage.getItem('sessionToken');
      if (!storedUserInfo) {
        toast.error('Session expired. Redirecting to login...');
        router.push('/admin/login');
        return;
      }
  
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}admin/services/${selectedService.id}`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${storedUserInfo}`,
            },
            body: formData,
          }
        );
  
        if (response.ok) {
          const updatedService = await response.json();
          setMainServices((prevServices) =>
            prevServices.map((service) =>
              service.id === updatedService.id ? updatedService : service
            )
          );
          toast.success('Service updated successfully!');
          setShowEditModal(false);
        } else {
          toast.error('Failed to update Service.');
        }
      } catch (error) {
        if(error)
        toast.error('An error occurred while updating the Service.');
      }
    } else {
      toast.error('Please provide valid service details.');
    }
  };
  

  const showDeleteConfirm = (id: number) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const hideDeleteConfirm = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  const openEditModal = (service: Services) => {
    setSelectedService(service);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedService(null);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-black">All Services</h4>
      <div className="flex flex-col text-white">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Name</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Sub Title</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Logo</h5>
          </div>
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Image</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {mainServices.length > 0 ? (
          mainServices.map((mainService) => (
            <div
              className={`grid grid-cols-5 sm:grid-cols-5 ${mainServices.indexOf(mainService) === mainServices.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
                }`}
              key={mainService.id}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black">{mainService.name}</p>
              </div>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <p className="text-black">{mainService.subTitle}</p>
              </div>

              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${mainService.image}`}
                  alt="image"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${mainService.backgroundImage}`}
                  alt="image"
                  height={100}
                  width={100}
                />
              </div>

              <div className="flex items-center justify-center gap-2 p-2.5 xl:p-5">
                <button
                  className="text-blue-500"
                  onClick={() => openEditModal(mainService)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => showDeleteConfirm(mainService.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <p>No services found.</p>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold text-center mb-4 text-black">
              Are you sure you want to delete this Service?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDelete(deleteId as number)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={hideDeleteConfirm}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && selectedService && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 text-black">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold text-center mb-4 text-black">Edit Service</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Service Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded"
                value={selectedService.name}
                onChange={(e) => {
                  setSelectedService({ ...selectedService, name: e.target.value });
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Sub Title</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded"
                value={selectedService.subTitle}
                onChange={(e) => {
                  setSelectedService({ ...selectedService, subTitle: e.target.value });
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">New Logo</label>
              <input
                type="file"
                className="w-full mt-2 p-2 border rounded"
                onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">New Background Image</label>
              <input
                type="file"
                className="w-full mt-2 p-2 border rounded"
                onChange={(e) => setNewBackgroundImage(e.target.files ? e.target.files[0] : null)}
              />
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesTable;
