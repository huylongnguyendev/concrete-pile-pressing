import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Checkbox } from "#/components/ui/checkbox";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { signInFn } from "#/lib/db/user/user.server";
import { type SignIn, SignInSchema } from "#/lib/shared/schema/user.schema";

export const Route = createFileRoute("/admin/(auth)/sign-in")({
	staticData: { showNavbar: false },
	component: RouteComponent,
});

function RouteComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const form = useForm({
		defaultValues: {
			identicator: "",
			password: "",
			isRemember: false,
		} as SignIn,
		validators: {
			onChange: SignInSchema,
			onBlur: SignInSchema,
		},
		onSubmit: async ({ value }) => {
			toast.info("Đang xử lý vui lòng chờ trong giây lát...");

			const res = await signInFn({ data: value });
			if (!res) {
				toast.error("Không nhận được phản hồi từ máy chủ.");
				return;
			}

			if (res.success) {
				toast.success(res.message);
				navigate({ to: "/admin" });
			} else toast.error(res.message);
		},
	});

	return (
		<div className="grid place-items-center w-full h-dvh bg-muted/40 px-4 py-6">
			<Card className="w-full max-w-md shadow-md">
				<CardHeader className="text-center gap-0.5">
					<CardTitle className="text-2xl font-bold text-primary uppercase">
						Đăng nhập
					</CardTitle>
					<CardDescription className="text-sm">
						Chào mừng bạn, đăng nhập vào tài khoản của bạn
					</CardDescription>
				</CardHeader>

				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							e.stopPropagation();
							form.handleSubmit();
						}}
						className="space-y-4"
					>
						{/* Username */}
						<form.Field name="identicator">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Tên đăng nhập/Số điện thoại</FieldLabel>
									<Input
										name={name}
										value={state.value}
										onBlur={handleBlur}
										onChange={(e) => handleChange(e.target.value)}
										placeholder="Tên đăng nhập/Số điện thoại của bạn...."
									/>
									<FieldError>
										{state.meta.errorMap.onChange
											? state.meta.errorMap.onChange
													.flat()
													.map((issue) => issue.message)
													.join(", ")
											: ""}
									</FieldError>
								</Field>
							)}
						</form.Field>

						{/* Password */}
						<form.Field name="password">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Mật khẩu</FieldLabel>
									<div className="relative">
										<Input
											type={showPassword ? "text" : "password"}
											name={name}
											value={state.value}
											onBlur={handleBlur}
											onChange={(e) => handleChange(e.target.value)}
											placeholder="••••••••"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowPassword((prev) => !prev)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
										>
											{showPassword ? (
												<EyeSlashIcon size={18} />
											) : (
												<EyeIcon size={18} />
											)}
										</button>
									</div>
									<FieldError>
										{state.meta.errorMap.onChange
											? state.meta.errorMap.onChange
													.flat()
													.map((issue) => issue.message)
													.join(", ")
											: ""}
									</FieldError>
								</Field>
							)}
						</form.Field>

						<form.Field name="isRemember">
							{({ name }) => (
								<FieldGroup>
									<Field orientation="horizontal" className="gap-1">
										<Checkbox id={name} name={name} />
										<FieldLabel htmlFor={name}>Ghi nhớ đăng nhập</FieldLabel>
									</Field>
								</FieldGroup>
							)}
						</form.Field>

						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
						>
							{([canSubmit, isSubmitting]) => {
								console.log(canSubmit);
								return (
									<Button
										type="submit"
										disabled={!canSubmit}
										className="w-full mt-2"
									>
										{isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
									</Button>
								);
							}}
						</form.Subscribe>
					</form>
				</CardContent>

				<CardFooter className="flex justify-center border-t py-4 text-xs text-muted-foreground">
					Chưa có tài khoản?{" "}
					<Link
						to="/admin/sign-in"
						className="ml-1 text-primary underline underline-offset-4 hover:opacity-80"
					>
						Đăng ký ngay
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
