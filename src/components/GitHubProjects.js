import React, { useState, useEffect } from 'react';

const GitHubProjects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/teemaac/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h2>Some of My Projects</h2>
            <div className="projects-container">
                {repos.map(repo => (
                    <div key={repo.id} className="github-project">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>{repo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GitHubProjects;
