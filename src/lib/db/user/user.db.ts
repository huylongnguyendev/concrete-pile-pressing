import { createServerFn } from "@tanstack/react-start";
import bcrypt from "bcryptjs";
import { prisma } from "#/db";
import type { SignIn, SignUp } from "#/lib/shared/schema/user.schema";

const saltRound = Number(process.env.SALTROUND) ?? 12;

const signUpFn = createServerFn({ method: "POST" })
	.validator((data: SignUp) => data)
	.handler(async ({ data }) => {
		try {
			const { username, password, phoneNumber } = data;
			const isValidPhoneNumber = /^\d+$/.test(phoneNumber);

			if (!isValidPhoneNumber)
				return {
					success: false,
					message: "Tên tài khoản hoặc số điện thoại không hợp lệ!",
				};

			const user = await prisma.user.findFirst({
				where: { OR: [{ username, phoneNumber }] },
			});

			if (user)
				return {
					success: false,
					message: "Tên tài khoản hoặc số điện thoại không hợp lệ!",
				};

			const hashed = await bcrypt.hash(password, saltRound);

			await prisma.user.create({
				data: {
					username,
					phoneNumber,
					displayName: data.displayName,
					password: hashed,
				},
			});
			return {
				success: true,
				message: "Đăng ký thành công!",
			};
		} catch (error) {
			if (error instanceof Error) throw new Error(error.message);
			return {
				success: false,
				message: "Lỗi hệ thống",
			};
		}
	});

const signInFn = createServerFn({ method: "POST" })
	.validator((data: SignIn) => data)
	.handler(async ({ data }) => {
		try {
			const { identicator, password, isRemember } = data;

			const user = await prisma.user.findFirst({
				where: {
					OR: [{ username: identicator }, { phoneNumber: identicator }],
				},
			});

			if (!user)
				return {
					success: false,
					message: "Tên đăng nhập hoặc Mật khẩu không đúng!",
				};

			const { password: hashed } = user;
			const isValidPassword = await bcrypt.compare(password, hashed);
			if (!isValidPassword)
				return {
					success: false,
					message: "Tên đăng nhập hoặc Mật khẩu không đúng!",
				};

			return {
				success: true,
				message: "Đăng nhập thành công!",
			};
		} catch (error) {
			if (error instanceof Error) throw new Error(error.message);
			return {
				success: false,
				message: "Lỗi hệ thống",
			};
		}
	});

export { signInFn, signUpFn };
