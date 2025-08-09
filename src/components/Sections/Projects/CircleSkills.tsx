interface IProps {
  skill: Array<string>;
}

const CircleSkills = ({ skill }: IProps) => {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {skill.map((item, idx) => {
        return (
          <div key={idx} className="text-xs bg-[var(--circlSkill-bg)] font-medium  h-full rounded-full py-1 px-2 transition-colors">
          {/* <div className="text-xs bg-[var(--section-color-about)] font-medium  h-full rounded-full py-1 px-2 transition-colors"> */}
            <p className="text-center">
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CircleSkills;
