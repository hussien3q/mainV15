import { BentoGrid } from "@/components/bento/bento-grid";
import { BentoCard } from "@/components/bento/bento-card";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <SectionWrapper id="skills" label="Capabilities" title="Skills">
      <BentoGrid>
        {skillGroups.map((group) => (
          <BentoCard
            key={group.title}
            colSpan={12}
            className="md:col-span-4 lg:col-span-6 !col-span-4 md:!col-span-4 lg:!col-span-6"
          >
            <h3 className="brand-font text-base font-bold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((chip) => (
                <span key={chip} className="skill-chip">
                  {chip}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}
