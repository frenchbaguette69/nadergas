"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import Link from "next/link";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, X, Zap } from "lucide-react";
import Paginator from "@/components/ui/paginator";
import { TQuote } from "@/types";

const Quotes = () => {
	const [loading, setLoading] = useState(true);
	const [status, setStatus] = useState("all");
	const [search, setSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [quotes, setQuotes] = useState<TQuote[]>([]);

	const fetchQuotes = async () => {
		setLoading(true);

		const statusQuery = status ? `status=${status}` : "";
		const searchQuery = search ? `search=${searchTerm}` : "";

		const res = await axios.get(`/api/admin/quotes?page=${page}&${statusQuery}&${searchQuery}`);
		const data = await res.data;

		setPage(data.page as number);
		setTotalPages(data.totalPages as number);
		setQuotes(data.quotes as TQuote[]);
		setLoading(false);
	};

	const handleSearch = async (e: any) => {
		e.preventDefault();
		if (search) void fetchQuotes();
		else setSearch(true);
	};

	const handleClearSearch = async (e: any) => {
		e.preventDefault();
		setSearch(false);
		setSearchTerm("");
	};

	useEffect(() => {
		void fetchQuotes();
	}, [status, page, search]);

	return (
		<div>
			<div className="flex justify-between">
				<div className="mb-6 flex items-center gap-4">
					<Tabs value={status} onValueChange={(v) => setStatus(v)}>
						<TabsList>
							<TabsTrigger value="all">All</TabsTrigger>
							<TabsTrigger value="new">New</TabsTrigger>
							<TabsTrigger value="signed">Signed</TabsTrigger>
						</TabsList>
					</Tabs>
					{loading && <div className="text-sm text-gray-400">Refreshing...</div>}
				</div>
				<div className="flex items-center">
					{search && (
						<Button variant="link" size="sm" onClick={handleClearSearch}>
							<X />
						</Button>
					)}
					<form onSubmit={handleSearch} className="flex items-center">
						<Input
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							type="email"
							placeholder="Search by customer email"
							className="rounded-md border p-2 min-w-[220px]"
						/>
						<Button type="submit" variant="outline" size="sm" className="ml-2">
							<Search />
						</Button>
					</form>
				</div>
			</div>
			<Table className="border">
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Quote ID</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Customer</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Service</TableHead>
						<TableHead className="min-w-[100px]">Area (m²)</TableHead>
						<TableHead className="min-w-[100px]">Total</TableHead>
						<TableHead>Status</TableHead>
						<TableHead className="text-center">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="relative">
					{quotes.map((quote) => (
						<TableRow key={quote.id}>
							<TableCell className="text-gray-500">#{quote.id}</TableCell>
							<TableCell>{moment(quote.createdAt).format("DD MMM YYYY")}</TableCell>
							{/* @ts-ignore */}
							<TableCell>{quote.name}</TableCell>
							<TableCell>{quote.email}</TableCell>
							<TableCell>{quote.service.title}</TableCell>
							<TableCell className="text-center">{quote.area}</TableCell>
							<TableCell className="font-semibold">€{quote.total}</TableCell>
							<TableCell>
								<Badge variant={quote.signed ? "default" : "destructive"}>{quote.signed ? "Signed" : "New"}</Badge>
							</TableCell>
							<TableCell className="text-right">
								<Link href={`/admin/quotes/${quote.id}`}>
									<Button variant="outline" size="sm">
										View
									</Button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className="mt-6">
				<Paginator
					currentPage={page}
					totalPages={totalPages}
					onPageChange={(page) => setPage(page)}
					showPreviousNext={true}
				/>
			</div>
		</div>
	);
};

export default Quotes;
