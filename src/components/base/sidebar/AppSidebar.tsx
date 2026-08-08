import { CaretRightIcon, GearIcon, SignOutIcon } from "@phosphor-icons/react";
import { ClientOnly, Link } from "@tanstack/react-router";
import { Logo } from "#/components/brand/Logo";
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarImage,
} from "#/components/ui/avatar";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
	useSidebar,
} from "#/components/ui/sidebar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import {
	sidebarAppList,
	sidebarMangageList,
} from "#/data/sidebar/sidebar.data";

export function AppSidebar() {
	const { open } = useSidebar();
	return (
		<Sidebar collapsible="icon" className="border-0">
			<SidebarHeader className="font-bold text-lg px-4 py-3 max-md:pt-8">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Logo isSidebar isSidebarOpen={open} />
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarMenu>
						<TooltipProvider delayDuration={100}>
							<SidebarMenu>
								{sidebarAppList.map((sidebar) => {
									const Icon = sidebar.icon;
									return (
										<SidebarMenuItem key={sidebar.key}>
											<Tooltip>
												{/* Dùng TooltipTrigger bọc ngoài hoặc kết hợp khéo léo với asChild */}
												<TooltipTrigger asChild>
													<SidebarMenuButton asChild>
														<Link
															to={sidebar.href}
															className="text-foreground"
															activeProps={{
																className: "text-primary font-medium",
															}}
														>
															<Icon weight="bold" />
															<span className="capitalize">
																{sidebar.label}
															</span>
														</Link>
													</SidebarMenuButton>
												</TooltipTrigger>
												{!open && (
													<TooltipContent
														side="right"
														className="capitalize"
														sideOffset={10}
													>
														{sidebar.label}
													</TooltipContent>
												)}
											</Tooltip>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</TooltipProvider>
					</SidebarMenu>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Quản lý</SidebarGroupLabel>
					<SidebarMenu>
						<TooltipProvider delayDuration={100}>
							<SidebarMenu>
								{sidebarMangageList.map((sidebar) => {
									const Icon = sidebar.icon;
									return (
										<SidebarMenuItem key={sidebar.key}>
											<Tooltip>
												<TooltipTrigger asChild>
													<SidebarMenuButton asChild>
														<Link
															to={sidebar.href}
															className="text-foreground"
															activeProps={{
																className: "text-primary font-medium",
															}}
														>
															<Icon weight="bold" />
															<span className="capitalize">
																{sidebar.label}
															</span>
														</Link>
													</SidebarMenuButton>
												</TooltipTrigger>
												{/* Nội dung tooltip hiển thị khi sidebar thu gọn */}
												{!open && (
													<TooltipContent
														side="right"
														className="capitalize"
														sideOffset={10}
													>
														{sidebar.label}
													</TooltipContent>
												)}
											</Tooltip>
										</SidebarMenuItem>
									);
								})}
							</SidebarMenu>
						</TooltipProvider>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link
								to="/admin/settings"
								activeProps={{ className: "text-primary font-medium" }}
							>
								<GearIcon weight="bold" />
								<span>Cài đặt</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<ClientOnly>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton className="h-auto py-2 justify-between w-full">
										<div className="flex items-center gap-2 truncate">
											<Avatar className="size-8">
												<AvatarImage
													src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
													alt="avatar"
												/>
												<AvatarFallback>CN</AvatarFallback>
												<AvatarBadge className="bg-green-600 dark:bg-green-800" />
											</Avatar>
											<div className="flex flex-col text-left truncate leading-tight">
												<span className="font-semibold truncate">Name</span>
												<span className="text-xs text-muted-foreground truncate">
													role
												</span>
											</div>
										</div>
										<CaretRightIcon
											weight="bold"
											className="size-4 shrink-0 opacity-50"
										/>
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-48">
									<DropdownMenuItem asChild>
										<Button
											className="w-full flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
											onClick={() => {
												// Xử lý đăng xuất ở đây
											}}
										>
											<SignOutIcon weight="bold" />
											<span>Đăng xuất</span>
										</Button>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</ClientOnly>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
