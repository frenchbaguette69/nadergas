// this is where you'd implement some pagination logic like whether a next page is available, which can then be imported to the DataTable

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { generatePaginationLinks } from "./generate-pages";

type PaginatorProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
	showPreviousNext: boolean;
};

export default function Paginator({ currentPage, totalPages, onPageChange, showPreviousNext }: PaginatorProps) {
	return (
		<Pagination>
			<PaginationContent>
				{showPreviousNext && totalPages ? (
					<PaginationItem>
						<PaginationPrevious onClick={() => !(currentPage - 1 < 1) && onPageChange(currentPage - 1)} />
					</PaginationItem>
				) : null}
				{generatePaginationLinks(currentPage, totalPages, onPageChange)}
				{showPreviousNext && totalPages ? (
					<PaginationItem>
						<PaginationNext onClick={() => !(currentPage > totalPages - 1) && onPageChange(currentPage + 1)} />
					</PaginationItem>
				) : null}
			</PaginationContent>
		</Pagination>
	);
}