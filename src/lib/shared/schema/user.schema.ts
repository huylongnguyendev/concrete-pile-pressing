import { z } from "zod";

const SignUpSchema = z
	.object({
		username: z
			.string()
			.min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
			.max(50, "Tên đăng nhập không được quá 50 ký tự"),
		phoneNumber: z
			.string()
			.regex(
				/^[0-9]{10,11}$/,
				"Số điện thoại không hợp lệ (phải từ 10-11 chữ số)",
			),
		displayName: z.string().min(2, "Tên hiển thị phải có ít nhất 2 ký tự"),
		password: z.string().min(8, "Mật khẩu phải từ 8 ký tự trở lên"),
		confirm: z.string(),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Mật khẩu không khớp!",
		path: ["confirm"],
	});

const SignInSchema = z.object({
	identicator: z
		.string()
		.min(1, "Tên đăng nhập hoặc Số điện thoại không được để trống!"),
	password: z.string().min(1, "Mật khẩu không được để trống!"),
	isRemember: z.boolean(),
});

type SignUp = z.infer<typeof SignUpSchema>;
type SignIn = z.infer<typeof SignInSchema>;

export { SignUpSchema, SignInSchema, type SignUp, type SignIn };
