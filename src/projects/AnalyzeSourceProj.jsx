import React, { useState } from 'react';
import analyzeSourceDemoPng from "../images/analyze-source-demo.png";
import ExpandableImage from "../components/ExpandableImage";

function AnalyzeSourceProj() {
  return (
    <div className="project-content">
      <h2 className="project-header">analyze-source</h2>
      <div className="project-description">
        <ExpandableImage width="50%" src={analyzeSourceDemoPng} alt="Sample output of analyze-source"/> 
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/dism-exe/bn6f/tree/master/tools/analyze_source">GitHub link</a></p>
        <p>During 2019, I was working on a source recreation of a Game Boy Advance game called Mega Man Battle Network 6, which was written in ARM7TDMI assembly. Part of that process involves documenting the extracted assembly. I created a program that would automatically replace the raw numbers associated with struct accesses with variable names. This ends up being a non-trivial task as in assembly, there’s no way to know the specific type of a register on its own; so instead context from the entire function has to be used. The program will do a static trace from a starting function, using inference rules to determine the type of a register each time it is modified with a new value. For example, reading from a specific part of memory into register r0, where that memory is marked as containing a BattleObject type would set a register r0 to a BattleObject type.</p>
        <p>The project overall required deep knowledge of core Python features and programming techniques such as string parsing and manipulation, regex, data structure manipulation, and object oriented programming.</p>
      </div>
    </div>
  );
}

export default AnalyzeSourceProj;
