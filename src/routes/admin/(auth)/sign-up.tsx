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
import { Field, FieldError, FieldLabel } from "#/components/ui/field";
import { Input } from "#/components/ui/input";
import { signUpFn } from "#/lib/db/user/user.server";
import { type SignUp, SignUpSchema } from "#/lib/shared/schema/user.schema";

export const Route = createFileRoute("/admin/(auth)/sign-up")({
	staticData: { showNavbar: false },
	component: RouteComponent,
});

function RouteComponent() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const navigate = useNavigate();

	const form = useForm({
		defaultValues: {
			username: "",
			phoneNumber: "",
			displayName: "",
			password: "",
			confirm: "",
		} as SignUp,
		validators: {
			onChange: SignUpSchema,
			onBlur: SignUpSchema,
		},
		onSubmit: async ({ value }) => {
			toast.info("Đang xử lý vui lòng chờ trong giây lát...");

			const res = await signUpFn({ data: value });
			if (!res) {
				toast.error("Không nhận được phản hồi từ máy chủ.");
				return;
			}

			if (res.success) {
				toast.success(res.message);
				navigate({ to: "/admin/sign-in" });
			} else toast.error(res.message);
		},
	});

	return (
		<div className="grid place-items-center w-full h-dvh bg-muted/40 px-4 py-6">
			<Card className="w-full max-w-md shadow-md">
				<CardHeader className="text-center gap-0.5">
					<CardTitle className="text-2xl font-bold text-primary uppercase">
						Tạo tài khoản
					</CardTitle>
					<CardDescription className="text-sm">
						Nhập thông tin bên dưới để đăng ký tài khoản quản trị mới
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
						<form.Field name="username">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Tên đăng nhập</FieldLabel>
									<Input
										name={name}
										value={state.value}
										onBlur={handleBlur}
										onChange={(e) => handleChange(e.target.value)}
										placeholder="nguyenvana"
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

						{/* Phone Number */}
						<form.Field name="phoneNumber">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Số điện thoại</FieldLabel>
									<Input
										name={name}
										value={state.value}
										onBlur={handleBlur}
										onChange={(e) => handleChange(e.target.value)}
										placeholder="0909123456"
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

						{/* Display Name */}
						<form.Field name="displayName">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Tên hiển thị</FieldLabel>
									<Input
										name={name}
										value={state.value}
										onBlur={handleBlur}
										onChange={(e) => handleChange(e.target.value)}
										placeholder="Nguyễn Văn A"
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

						{/* Confirm Password */}
						<form.Field name="confirm">
							{({ name, state, handleBlur, handleChange }) => (
								<Field>
									<FieldLabel>Xác nhận mật khẩu</FieldLabel>
									<div className="relative">
										<Input
											type={showConfirm ? "text" : "password"}
											name={name}
											value={state.value}
											onBlur={handleBlur}
											onChange={(e) => handleChange(e.target.value)}
											placeholder="••••••••"
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowConfirm((prev) => !prev)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
										>
											{showConfirm ? (
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

						<form.Subscribe
							selector={(state) => [state.canSubmit, state.isSubmitting]}
						>
							{([canSubmit, isSubmitting]) => (
								<Button
									type="submit"
									disabled={!canSubmit}
									className="w-full mt-2"
								>
									{isSubmitting ? "Đang xử lý..." : "Đăng ký"}
								</Button>
							)}
						</form.Subscribe>
					</form>
				</CardContent>

				<CardFooter className="flex justify-center border-t py-4 text-xs text-muted-foreground">
					Đã có tài khoản?{" "}
					<Link
						to="/admin/sign-in"
						className="ml-1 text-primary underline underline-offset-4 hover:opacity-80"
					>
						Đăng nhập ngay
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
