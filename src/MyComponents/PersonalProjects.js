import React from 'react'
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const PersonalProjects = () => {
  return (
    <div>
      <SectionHeader text="Personal Projects" />
      <ProjectCard
        title="RECREATED INSOMNIAC'S SPIDERMAN'S MECHANICS"
        subtitle="(Fan Project)"
        videoUrl="https://www.youtube.com/embed/Biieuw1gV3o"
        description={
          <div>
            <p>
              An In-depth recreation of Spider-Man game including:
            </p>
            {<ul>
              <li><strong>Physics driven</strong> web-swinging system with <strong>dynamic force calculations</strong> inspired by the original game</li>
              <li>Implemented <strong>swing point detection algorithms</strong> that identify <strong>optimal attachment points</strong> on buildings with <strong>scores</strong>
                based on player's <strong>velocity, desired direction</strong> and <strong>building geometry</strong></li>
              <li>Uses <strong>Space Partitioned Data Structures</strong> instead of Raycast for <strong>performance</strong> and <strong>precision</strong></li>
              <li><strong>Wall Running</strong> and traversal</li>
              <li><strong>FreeFlow combat system</strong> with <strong>Counter Attacks</strong></li>
              <li><strong>Enemy AI</strong> and <strong>Boss Battle</strong></li>

              and a lot more
            </ul>}
          </div>
        }
        details={[
          { label: 'Engine', value: <strong>Unreal Engine 5 (C++)</strong> },
        ]}
        note={<p></p>}
      />

      <ProjectCard
        title="THIRD PERSON SHOOTER PROTOTYPE WITH AI"
        subtitle=""
        videoUrl="https://www.youtube.com/embed/xZMvd5DU3U4"
        description={
          <div>
            <p>
              Complete Shooter game with AI and AAA quality gameplay mechanics
            </p>
            {<ul>
              <li>GTA inspired AI makes use of <strong>dynamic cover systems</strong> which impart <strong>protection</strong> from <strong>Player</strong> at the same time allowing the
                <strong>oppurtunity</strong> to <strong>shoot the Player</strong></li>

              <li><strong>AI behavior tree</strong> that makes use of <strong>Perception, Decision Tree, Shooting, Cover system</strong> and <strong>position selection</strong></li>

              <li>Seamless animations harnessing <strong>Blendspaces, Strafing, Turning In Place, Inverse Kinematics, Curves, Leaning, Crouching, Weapon Fire</strong>
                and <strong>recoils</strong>, Equipping and Unequipping weapons</li>

              <li><strong>Dynamic crosshairs</strong> with <strong>spread</strong> that responds to weapon type, Player's speed, firing, aiming and jumping</li>

              <li><strong>Blending</strong> animations <strong>per bone</strong>, blending and playing animations based on <strong>states, bones</strong>, and <strong>graphs</strong>;
                <strong>Animation montages, notifies</strong> and <strong>sync markers</strong> for footsteps and sync groups</li>

              <li><strong>AI behavior trees, blackboard components, Environmental Query</strong> and <strong>Contexts</strong></li>
            </ul>}
          </div>
        }
        details={[
          { label: 'Engine', value: <strong>Unreal Engine 4 (C++)</strong> },
        ]}
        note={<p></p>}
      />

      <ProjectCard
        title="MANGA STYLED SURVIVAL HORROR GAME"
        subtitle="(WIP)"
        videoUrl="https://www.youtube.com/embed/1Wc9OIkxaaw"
        description={
          <div>
            <p>
              Inspired by works of <strong>Junji Ito</strong> and Silent Hill Series
            </p>
            {<ul>

              <li><strong>Modified</strong> Engine's <strong>source code</strong> to bypass <strong>limitations of post-process effects</strong>,
                which were insufficient for achieving the desired <strong>manga-style shading</strong>.</li>

              <li>Integrated the <strong>custom shading</strong> directly into the <strong>rendering pipeline</strong>
                for <strong>optimal performance</strong> and <strong>visual fidelity</strong>.</li>

              <li>Makes use of Unreal's <strong>Gameplay Ability System</strong> for <strong>combat</strong> and <strong>locomotion</strong></li>


            </ul>}
          </div>
        }
        details={[
          { label: 'Engine', value: <div><strong>Custom Build</strong> of Unreal Engine 5 <strong>(C++)</strong></div> },
        ]}
        note={<p></p>}
      />

      <ProjectCard
        title="RECREATED POCKETPAIR'S PALWORLD"
        subtitle="(Fan Project)"
        videoUrl="https://www.youtube.com/embed/unxBeUS69bg"
        description={
          <div>
            <p>
              Recreated mechanics from PalWorld including:
            </p>
            {<ul>

              <li>Engineered a <strong>system</strong> for rapidly <strong>creating new pals</strong> and <strong>attack moves</strong>, boosting development effieciency</li>

              <li><strong>Recreated</strong> more than 30 <strong>moves</strong> from the original game, with <strong>distinct properties</strong>, using the <strong>flexible move system</strong></li>

              <li>AI systems allow pals to have <strong>roles</strong> such as <strong>allies, foes</strong>, and <strong>neutral</strong> with various <strong>state machines</strong> 
              for <strong>combat, wander, captured</strong> etc</li>

              <li><strong>Inventory</strong> and <strong>crafting</strong> systems, <strong>resource gathering, base-building, combat</strong> and <strong>weapon</strong> systems, 
              <strong>capture</strong> systems</li>

              <li>Uses <strong>Time-slicing</strong> and other performance enhancing techniques</li>

              <li>Built <strong>region-based</strong> pal <strong>spawning</strong> and <strong>map-editing tools</strong></li>

              and a lot more


            </ul>}
          </div>
        }
        details={[
          { label: 'Engine', value: <div><strong> Unreal Engine 5 (C++)</strong></div> },
        ]}
        note={<p></p>}
      />

    </div>
  );
}

export default PersonalProjects
