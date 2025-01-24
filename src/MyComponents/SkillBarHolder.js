import React from 'react'
import SkillBar from './SkillBar';

// Game Engine Logos
import UnrealEngineLogo from '../assets/logos/gameEngines/UnrealEngineLogo.png';
import RageLogo from '../assets/logos/gameEngines/RageLogo.png';
import UnityLogo from '../assets/logos/gameEngines/UnityLogo.png';
import GodotLogo from '../assets/logos/gameEngines/GodotLogo.png';

// Programming Language Logos
import CPlusPlusLogo from '../assets/logos/programmingLanguages/CPlusPlusLogo.png';
import CSharpLogo from '../assets/logos/programmingLanguages/CSharpLogo.png';

const CategoryHolder = () => {

  const gameEngines = [
    { imageSrc: UnrealEngineLogo, altText: 'Unreal Engine', label: 'Unreal' },
    { imageSrc: RageLogo, altText: 'RAGE Engine', label: 'RAGE' },
    { imageSrc: UnityLogo, altText: 'Unity Engine', label: 'Unity' },
    { imageSrc: GodotLogo, altText: 'Godot Engine', label: 'Godot' },
  ];

  const programmingLanguages = [
    { imageSrc: CPlusPlusLogo, altText: 'C++', label: 'C++' },
    { imageSrc: CSharpLogo, altText: 'C#', label: 'C#' },
  ];

  return (
    <div>
      <SkillBar
        title="Game Engines"
        items={gameEngines}
        backgroundColor="#000000"
      />
      <SkillBar
        title="Programming Languages"
        items={programmingLanguages}
        backgroundColor="#222222"
      />
    </div>
  );
}

export default CategoryHolder
