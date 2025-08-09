interface IProps {
    name: string;
    skillPerformance: string;
    widthPirpleDiv?: string;
    rowGap?: string;
}

const Skills = ({
    name,
    skillPerformance,
    widthPirpleDiv,
    rowGap,
}: IProps) => {
    return (
        <div className="md:flex md:flex-col mb-4 text-nowrap ">
            <div className={`flex flex-row ${rowGap || "gap-[16em]"} mb-2`}>
                <p>{name}</p>
                <p>{skillPerformance}</p>
            </div>
        <div className="w-[22em] h-[0.5em] rounded-full bg-[#E5E7EB]">
            <div className={`${widthPirpleDiv} h-[0.5em] rounded-full bg-[var(--btn_color)] `}>
            </div>
        </div>
        </div>
    );
};

export default Skills;
