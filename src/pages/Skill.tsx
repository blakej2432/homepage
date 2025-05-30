import React from 'react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard';

interface Skills{
    id: number;
    title:string;
    logo:string;
    desc:string;
    percent:number;
}

const frontSkills : Skills[] = [
    {id:0, title:"html",logo:"/logo192.png",
        desc:"hyper text markup language", percent: 90},
    {id:1, title:"css",logo:"/logo192.png",
        desc:"hyper text markup language", percent: 90},
    {id:2, title:"git",logo:"/logo192.png",
        desc:"hyper text markup language", percent: 90},
]

const Skill = () => {
  return (
    <div className="main skill">
        <div className='content-inner'>
            <SectionTitle title="Skill" subTitle="제가 할 수 있는 스킬입니다."/>
            <div>
                <ul className="skill-list">
                    {frontSkills.map((skill)=> (
                        <li key={skill.id}>
                            <SkillCard
                                id={skill.id}
                                title={skill.title}
                                logo={skill.logo}
                                desc={skill.desc}
                                percent={skill.percent}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Skill
