"use client";
import Link from "next/link";
import { Shield } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isHomePath = pathname === "/";

    return (
        <div className={`p-4 flex justify-between items-center ${
            isHomePath ? "bg-blue-50" : "bg-white border-b border-blue-50"
        }`}>
            <Link href="/" className="flex items-center">
                <Shield className="w-6 h-6 text-blue-500 mr-2" />
                <h1 className="text-xl font-semibold">Expensio</h1>
            </Link>

            <div className="flex items-center space-x-4">
                <SignedIn>
                    <Link href={`/receipts`}>
                        <Button variant={`outline`}>My Receipts</Button>
                    </Link>
                    <Link href={`/manage-plan`}>
                        <Button>Manage Plan</Button>
                    </Link>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button>Login</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div >
    )
}