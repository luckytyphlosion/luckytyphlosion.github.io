import React, { Suspense } from "react";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    let state = {
      curProject: ""
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
        <div>
          <button className="project-button" onClick={this.setProjectView} value="AnalyzeSourceProj">analyze-source</button>
          <button className="project-button" onClick={this.setProjectView} value="GnuAssemblerProj">agbasm (GNU Assembler Modifications)</button>
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderProj">Auto-TT-Recorder</button>
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderYTProj">CTGP Legacy Records</button>
          <button className="project-button" onClick={this.setProjectView} value="AutoTTRecorderGUIProj">Auto-TT-Recorder GUI</button>
        </div>
        <div id="project-view">
          <Suspense fallback={<div>Loading...</div>}>{this.state.curProject}</Suspense>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
