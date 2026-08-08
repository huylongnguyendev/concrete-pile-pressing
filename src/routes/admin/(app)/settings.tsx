import { MoonIcon, SunDimIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { Slider } from "#/components/ui/slider";

export const Route = createFileRoute("/admin/(app)/settings")({
	component: RouteComponent,
});

function RouteComponent() {
	const [fontSize, setFontSize] = useState<number[]>([16]);

	return (
		<div className="space-y-8">
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle>Thiết lập cá nhân</CardTitle>
					<CardDescription>Cá nhân hóa trải nghiệm</CardDescription>
				</CardHeader>
			</Card>
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle>Thiết lập màn hình</CardTitle>
					<CardDescription>
						Tùy chỉnh màn hình với các theme, font
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-center">
						<h2 className="font-semibold">Theme</h2>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant={"outline"}>
									<SunDimIcon weight="bold" />
									<span>Chế độ sáng</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>Chuyển chế độ theme</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<SunDimIcon weight="bold" />
									<span>Chế độ sáng</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MoonIcon weight="bold" />
									<span>Chế độ tối</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</CardContent>
				<CardContent>
					<div className="flex flex-col gap-3">
						<div className="flex justify-between items-center">
							<h2 className="font-semibold text-sm">Kích thước chữ</h2>
							<span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
								{fontSize[0]}px
							</span>
						</div>
						<Slider
							value={fontSize}
							onValueChange={setFontSize}
							defaultValue={[16]}
							min={14}
							max={24}
							step={1}
						/>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
