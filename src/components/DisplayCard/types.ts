interface SkillDetail {
    ID: string;
    skill_name: string;
}

interface CardDetails {
    ID: string;
    title: string;
    project_skills: SkillDetail[];
    budget: number;
    url: string;
}

export default CardDetails;