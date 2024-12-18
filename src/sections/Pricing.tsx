"use client";

import { toast } from "@/hooks/use-toast";
import { Product } from "@prisma/client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaUser, FaPhone, FaEnvelope, FaTools, FaAddressBook } from "react-icons/fa";

type FormData = {
	name: string;
	phone: string;
	email: string;
	address: string;
	service: string;
	area: string;
};

export const Pricing = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		phone: "",
		email: "",
		address: "",
		service: "",
		area: "",
	});

	const fetchProducts = async () => {
		const res = await axios.get("/api/products");

		setProducts(res.data.products as Product[]);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast({
					title: "Bedankt! Uw formulier is succesvol ingediend.",
					variant: "success",
				});
				setFormData({ name: "", phone: "", email: "", address: "", service: "", area: "" });
			} else {
				console.error("Fout bij het indienen van het formulier:", response.statusText);
			}
		} catch (error) {
			console.error("Verzoek mislukt:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section className="md:py-24  overflow-x-clip py-10 relative">
			<div className="container mx-auto px-4 relative z-10 max-w-2xl">
				{" "}
				{/* Max breedte aangepast */}
				<h2 className="section-title text-3xl font-semibold text-center mb-8">Vrijblijvende offerte ontvangen?</h2>
				<p className="text-center text-gray-700 mb-8 max-w-lg mx-auto">
					Vul onderstaand formulier in voor een gratis en vrijblijvende offerte. Onze specialisten nemen snel contact
					met u op om uw wensen te bespreken en u van de beste service te voorzien.
				</p>
				<form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
					{" "}
					{/* W-full toegevoegd */}
					<div className="mb-4 flex items-center">
						<FaUser className="mr-2 text-gray-500" />
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							placeholder="Uw naam"
							required
						/>
					</div>
					<div className="mb-4 flex items-center">
						<FaPhone className="mr-2 text-gray-500" />
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							placeholder="Uw telefoonnummer"
							required
						/>
					</div>
					<div className="mb-4 flex items-center">
						<FaEnvelope className="mr-2 text-gray-500" />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							placeholder="Uw emailadres"
							required
						/>
					</div>
					<div className="mb-4 flex items-center">
						<FaAddressBook className="mr-2 text-gray-500" />
						<input
							type="text"
							name="address"
							value={formData.address}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							placeholder="Uw adres"
							required
						/>
					</div>
					<div className="mb-4 flex items-center">
						<FaTools className="mr-2 text-gray-500" />
						<select
							name="service"
							value={formData.service}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							required
						>
							<option value="">Selecteer de gewenste werkzaamheden</option>
							{products.map((product) => (
								<option key={product.id} value={product.id}>
									{product.title}
								</option>
							))}
						</select>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 font-medium mb-2">Aantal m²</label>
						<input
							type="number"
							name="area"
							value={formData.area}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded-lg"
							placeholder="Aantal vierkante meters"
							required
						/>
					</div>
					<button
						disabled={loading}
						type="submit"
						className="w-full flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#17b577] transition duration-300"
					>
						{loading ? <Loader2 className="animate-spin" /> : "Offerte Aanvragen"}
					</button>
				</form>
			</div>
		</section>
	);
};
