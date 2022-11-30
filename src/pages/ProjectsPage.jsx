import React, { Suspense } from "react";
import AutoTTRecorderProj from "../projects/AutoTTRecorderProj";
import "../Projects.css";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    let state = {
      curProject: <AutoTTRecorderProj/>
    };
    this.state = state;
    this.setProjectView = this.setProjectView.bind(this);
  }

  setProjectView(event) {
    const Component = React.lazy(() => import(`../projects/${event.target.value}`));
    this.setState({
      curProject: <Component/>
    });
  }

  render() {
    return (
      <div>
        <h1 className="project-page-header">Projects</h1>
        <div id="project-buttons">
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderProj">Auto-TT-Recorder</button>
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderYTProj">CTGP Legacy Records</button>
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderGUIProj">Auto-TT-Recorder GUI</button>
          <button className="project-button" onClick={this.setProjectView} value="AnalyzeSourceProj">analyze-source</button>
          <button className="project-button" onClick={this.setProjectView} value="GnuAssemblerProj">agbasm (GNU Assembler Modifications)</button>
        </div>
        <div id="project-view">
          <Suspense>{this.state.curProject}</Suspense>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
