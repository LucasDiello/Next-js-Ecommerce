"use client";
import React, { useState, useRef, useEffect } from "react";
import blankImage from "@/images/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg";
import Image, { StaticImageData } from "next/image";
import { Globe, Laptop2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Page() {
  const [profileImage, setProfileImage] = useState(blankImage);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const inputFileRef = useRef(null);
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    const storedName = localStorage.getItem("name");
    const storedDescription = localStorage.getItem("description");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (storedName) setName(storedName);
    if (storedDescription) setDescription(storedDescription);
    if (storedProfileImage)
      setProfileImage(storedProfileImage as unknown as StaticImageData);
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as Blob | null;

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(
            (reader.result as unknown as StaticImageData) || blankImage
          );
          localStorage.setItem("profileImage", reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem("name", newName);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    localStorage.setItem("description", newDescription);
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile saved",
      description: "Your profile has been saved successfully",
    });
  };

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen  flex-wrap mx-auto lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 mt-32 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={inputFileRef}
            />
            <label htmlFor="upload">
              <Image
                src={profileImage}
                height={192}
                width={192}
                alt="img-perfil"
                className="rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center cursor-pointer"
              />
            </label>
          </div>
          <input
            type="text"
            className="text-3xl font-bold pt-8 lg:pt-0 text-center lg:text-start"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex flex-col lg:block items-center justify-center lg:justify-start">
            <Laptop2 className=" fill-current text-green-700 mr-2" />
            <textarea
              name="description"
              id=""
              cols={40}
              rows={7}
              placeholder="what you do"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </p>
          <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <Globe className="text-green-700 mr-2" />
            Your Location {coords.latitude} N, {coords.longitude} W
          </p>
          <p className="pt-8 text-sm">
            Totally optional short description about yourself, what you do and
            so on.
          </p>
          <div className="pt-12 pb-8">
            <button
              onClick={handleSaveProfile}
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-56">
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          ref={inputFileRef}
        />
        <label htmlFor="upload">
          <Image
            src={profileImage}
            alt="img-perfil"
            width={1024}
            height={1024}
            className="rounded-none lg:rounded-xl shadow-2xl hidden lg:block cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
