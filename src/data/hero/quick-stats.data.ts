interface IQuickStat {
	number: number;
	prefix: string;
	title: string;
}

const quickStats: IQuickStat[] = [
	{
		number: 10,
		prefix: "+ Năm",
		title: "Kinh nghiệm thi công",
	},
	{
		number: 500,
		prefix: "+",
		title: "Công trình hoàn thành",
	},
	{
		number: 100,
		prefix: "%",
		title: "Đạt chuẩn kỹ thuật",
	},
];

export { quickStats, type IQuickStat };
