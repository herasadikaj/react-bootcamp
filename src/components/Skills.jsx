import "./website.css";

const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <div className="progress-bar-container">
                <div className="progress-bar">
                    <div className="progress" style={{ width: '40%' }}>
                        <span>React</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '40%' }}>
                        <span>Next</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}>
                        <span>Bootstrap</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}>
                        <span>CSS</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}>
                        <span>Tailwind</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '65%' }}>
                        <span>SCSS</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '65%' }}>
                        <span>Java</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
