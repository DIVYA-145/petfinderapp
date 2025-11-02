import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { savePet } from "../utils/storage";


const breeds = {
  Dog: ["Labrador", "Beagle", "German Shepherd", "Bulldog"],
  Cat: ["Persian", "Siamese", "Bengal", "Maine Coon"]
};

export default function AddPet() {
  const [params] = useSearchParams();
  const defaultMode = params.get("mode") || "lost";
  const [mode, setMode] = useState(defaultMode);
  const [type, setType] = useState("");
  const [breedOptions, setBreedOptions] = useState([]);
  const [form, setForm] = useState({
    name: "",
    petType: "",
    breed: "",
    color: "",
    customColor: "",
    size: "",
    customSize: "",
    gender: "",
    date: "",
    location: "",
    identifier: "",
    contact: "",
    description: "",
    image: ""
  });

  // Sync mode from URL
  useEffect(() => setMode(defaultMode), [defaultMode]);

  // Update breed options when pet type changes
  useEffect(() => {
    if (breeds[type]) setBreedOptions(breeds[type]);
    else setBreedOptions([]);
    setForm((f) => ({ ...f, breed: "" }));
  }, [type]);

  // Handle input changes
  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "contact") {
      // Only allow digits in contact
      const onlyNums = value.replace(/\D/g, "");
      setForm((f) => ({ ...f, contact: onlyNums }));
      return;
    }

    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => setForm((f) => ({ ...f, image: reader.result }));
      reader.readAsDataURL(files[0]);
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  // ✅ Validation function
  const validate = () => {
    const required = [
      "petType",
      "color",
      "size",
      "date",
      "location",
      "description",
      "contact"
    ];

    for (let r of required) {
      if (!form[r]) return false;
    }

    const contact = form.contact.trim();
    if (!/^[0-9]{10}$/.test(contact)) return false;

    return true;
  };

  // ✅ Handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      alert("Please fill all required fields correctly (10-digit contact).");
      return;
    }

    const payload = {
      name: form.name,
      petType: form.petType,
      breed: form.breed || form.customBreed || "",
      color: form.color === "Other" ? form.customColor : form.color,
      size: form.size === "Other" ? form.customSize : form.size,
      gender: form.gender,
      dateLost: form.date,
      dateFound: form.date,
      location: form.location,
      identifier: form.identifier,
      contact: form.contact,
      description: form.description,
      image: form.image
    };

    savePet(mode === "found" ? "foundPets" : "lostPets", payload);
    alert("Report submitted successfully!");
    window.location.href = mode === "found" ? "/found-pets" : "/lost-pets";
  };

  return (
    <section className="section add-pet-page">
      <h1>Report {mode === "found" ? "a Found" : "a Lost"} Pet</h1>
      <form id="addPetForm" onSubmit={onSubmit}>
        <label>Report Type</label>
        <select name="modeSelect" value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="lost">Lost Pet</option>
          <option value="found">Found Pet</option>
        </select>

        <label>Pet Name</label>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="e.g. Buddy"
        />

        <label>Pet Type *</label>
        <select
          name="petType"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setForm((f) => ({ ...f, petType: e.target.value }));
          }}
        >
          <option value="">Select...</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Other">Other</option>
        </select>

        <label>Breed</label>
        {breedOptions.length > 0 ? (
          <select name="breed" value={form.breed} onChange={onChange}>
            <option value="">Select</option>
            {breedOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        ) : (
          <input
            name="breed"
            value={form.breed}
            onChange={onChange}
            placeholder="Enter breed"
          />
        )}

        <label>Color *</label>
        <select name="color" value={form.color} onChange={onChange}>
          <option value="">Select Color</option>
          <option>Black</option>
          <option>White</option>
          <option>Brown</option>
          <option>Golden</option>
          <option>Gray</option>
          <option>Other</option>
        </select>
        {form.color === "Other" && (
          <input
            name="customColor"
            value={form.customColor}
            onChange={onChange}
            placeholder="Enter custom color"
          />
        )}

        <label>Size *</label>
        <select name="size" value={form.size} onChange={onChange}>
          <option value="">Select Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Other</option>
        </select>
        {form.size === "Other" && (
          <input
            name="customSize"
            value={form.customSize}
            onChange={onChange}
            placeholder="Enter custom size"
          />
        )}

        <label>Gender</label>
        <select name="gender" value={form.gender} onChange={onChange}>
          <option value="">Select...</option>
          <option>Male</option>
          <option>Female</option>
          <option>Unknown</option>
        </select>

        <label>Date {mode === "found" ? "Found" : "Lost"} *</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />

        <label>Location *</label>
        <input
          name="location"
          value={form.location}
          onChange={onChange}
          placeholder="City or area"
          required
        />

        <label>Microchip / Tag ID (optional)</label>
        <input
          name="identifier"
          value={form.identifier}
          onChange={onChange}
        />

        <label>Contact Number *</label>
        <input
          name="contact"
          value={form.contact}
          onChange={onChange}
          placeholder="10-digit mobile number"
          maxLength={10}
          required
        />

        <label>Description *</label>
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          required
        />

        <label>Upload Image</label>
        <input type="file" name="image" onChange={onChange} accept="image/*" />

        <button className="btn-primary" type="submit">
          Submit Report
        </button>
      </form>
    </section>
  );
}
