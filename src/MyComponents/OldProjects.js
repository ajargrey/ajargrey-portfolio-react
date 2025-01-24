import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const OldProjects = () => {
    return (
        <div>
            <SectionHeader text="Really Old Projects" />
            <ProjectCard
                title="OLD PROJECTS"
                subtitle="(2018-2020)"
                videoUrl="https://www.youtube.com/embed/_LONJXVUSpw"
                description={
                    <div>
                        <p>
                            Some projects from the time when I was starting out in game development and programming.
                        </p>
                        <ul>
                            <li>Simulating <strong>Artificial Bee Colony, Genetic Algorithm</strong> by <strong>Dervis Karaboga</strong>,
                                with <strong>swarm intelligence</strong> and <strong>decentralized self-organised system</strong>.</li>
                        </ul>

                        <p>
                            and a lot of other projects focusing on foundational skills and experimentation with mechanics
                        </p>
                        <ul>

                            <li><strong>Multiplayer racing</strong> game with realistic physics</li>

                            <li><strong>First Person Shooter</strong></li>

                            <li>Physics defying <strong>platformer shooter</strong> with <strong>teleportation, time</strong> 
                            and <strong>gravity</strong> altering</li>

                            <li><strong>Stealth</strong></li>

                            <li><strong>Tower defense</strong></li>

                            <li>Realtime strategy <strong>Garden Defense</strong> (similar to Plants vs Zombies)</li>

                            <li><strong>On-rails</strong> shooter</li>

                            and many others
                        </ul>
                    </div>
                }
                details={[
                    { label: 'Engine', value: <div><strong>Godot 3.1+ and Unity 2019+</strong></div> },
                ]}
            // note = {<p><b>*</b>Left Rockstar Games to focus on personal projects and independent game development.</p>}
            />
        </div>
    );
};

export default OldProjects;