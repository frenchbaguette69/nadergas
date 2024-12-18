"use client";

import { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, RefreshCcw } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

interface SignatureSectionProps {
	token: string;
	onSignatureChange: (signature: string) => void;
}

export function SignatureSection({ token, onSignatureChange }: SignatureSectionProps) {
	const signatureRef = useRef<SignaturePad>(null);
	const [agreedToTerms, setAgreedToTerms] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const clearSignature = () => {
		if (signatureRef.current) {
			signatureRef.current.clear();
			onSignatureChange("");
		}
	};

	const handleSignatureEnd = () => {
		if (signatureRef.current && !signatureRef.current.isEmpty()) {
			onSignatureChange(signatureRef.current.toDataURL());
		}
	};

	const handleSubmit = async () => {
		if (!signatureRef.current || signatureRef.current.isEmpty()) {
			toast({
				variant: "destructive",
				title: "Signature Required",
				description: "Please provide your signature before submitting.",
			});
			return;
		}

		if (!agreedToTerms) {
			toast({
				variant: "destructive",
				title: "Terms & Conditions",
				description: "Please accept the terms and conditions to continue.",
			});
			return;
		}

		try {
			setIsSubmitting(true);
			const signatureData = signatureRef.current.toDataURL();

			// Submit signature data
			const response = await axios.post("/api/quotes/sign", {
				token,
				signature: signatureData,
			});

			if (!response.data.success) {
				throw new Error("Failed to sign document");
			}

			toast({
				title: "Document Signed Successfully",
				description: "You will receive a copy of the signed document via email.",
				variant: "success",
			});

			// Redirect or show success state
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Failed to sign document. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Your Signature</CardTitle>
					<CardDescription>Please sign in the box below using your mouse or touch screen</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="border rounded-lg bg-white">
						<SignaturePad
							ref={signatureRef}
							canvasProps={{
								className: "w-full h-48 rounded-lg",
							}}
							onEnd={handleSignatureEnd}
						/>
					</div>
					<Button variant="ghost" size="sm" className="mt-2" onClick={clearSignature}>
						<RefreshCcw className="mr-2 h-4 w-4" />
						Clear Signature
					</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Terms & Conditions</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 max-h-48 overflow-y-auto">
						<h3 className="font-medium mb-2">Electronic Signature Agreement</h3>
						<p className="mb-4">
							By signing this document electronically, you agree that your electronic signature is the legal equivalent
							of your manual signature on this document.
						</p>
						<h3 className="font-medium mb-2">Consent to Electronic Delivery</h3>
						<p>
							You agree and consent to receive electronically all communications, agreements, documents, notices, and
							disclosures regarding your signature on this document.
						</p>
					</div>

					<div className="flex items-center space-x-2">
						<Checkbox
							id="terms"
							checked={agreedToTerms}
							onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
						/>
						<label
							htmlFor="terms"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							I have read and agree to the terms and conditions
						</label>
					</div>
				</CardContent>
			</Card>

			<Alert>
				<InfoIcon className="h-4 w-4" />
				<AlertDescription>
					This signing link will expire in 60 days. Please ensure you complete the signing process before expiration.
				</AlertDescription>
			</Alert>

			{/* Submit Button */}
			<div className="flex justify-end">
				<Button size="lg" disabled={!agreedToTerms || isSubmitting} onClick={handleSubmit}>
					{isSubmitting ? (
						<>
							<span className="mr-2">Signing...</span>
							<span className="animate-spin">⚪</span>
						</>
					) : (
						"Sign Document"
					)}
				</Button>
			</div>
		</div>
	);
}
