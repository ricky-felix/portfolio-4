const marqueeItems: string[] = [
	"UI/UX Design",
	"Product Management",
	"Frontend Dev",
	"Interaction Design",
	"Design Systems",
	"Prototyping",
	"User Research",
];

const Marquee: React.FC = () => {
	const track = marqueeItems.flatMap((item: string, i: number) => [
		<span
			key={`text-${i}`}
			className="shrink-0 text-[13px] sm:text-xs uppercase tracking-[3px] text-muted-foreground font-mono"
		>
			{item}
		</span>,
		<span
			key={`dot-${i}`}
			className="shrink-0 text-[8px] text-primary align-middle"
		>
			●
		</span>,
	]);

	return (
		<div className="w-full overflow-hidden flex items-center h-16 sm:h-[52px] rounded-[20px] sm:rounded-2xl border border-border bg-gradient-to-r from-primary/[0.06] via-muted to-secondary/[0.06]">
			<div className="flex gap-12 sm:gap-8 animate-marquee">
				{track}
				{/* Duplicate for seamless loop */}
				{track}
			</div>
		</div>
	);
};

export default Marquee;
