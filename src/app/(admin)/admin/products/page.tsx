import AddProdcuts from "@/sections/AddProdcuts";
import AllProducts from "@/sections/AllProducts";
import db from "@/server/db";
import React from "react";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
	const products = await db.product.findMany();
	return (
		<div>
			<AddProdcuts />
			<AllProducts products={products} />
		</div>
	);
};

export default ProductsPage;
