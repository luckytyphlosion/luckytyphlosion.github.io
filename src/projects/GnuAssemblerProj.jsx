import React from 'react';
import agbasmHelpTxt from "../files/agbasm_help.txt";

function GnuAssemblerProj() {
  return (
    <div className="project-content">
      <h1 className="project-header">agbasm (GNU Assembler Modifications)</h1>
      <div className="project-description">
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/luckytyphlosion/agbcc/tree/new_layout_with_libs">GitHub link</a></p>
        <p>In 2019, I added new features to a fork of GNU Assembler, a popular commercial assembler, which I deemed necessary for a source recreation of Mega Man Battle Network 6. The major features implemented are “true” local labels which go out of scope when a non-local label is defined, the ability to supply macro arguments across multiple lines, and the ability to define custom string encoding. The full list of new features can be found <a target="_blank" rel="noopener noreferrer" href={agbasmHelpTxt}>here</a>.</p>
        <p>Modifying the assembler overall required a deep understanding in how C works and the ability to read other people’s code.</p>
      </div>
    </div>
  );
}

export default GnuAssemblerProj;
