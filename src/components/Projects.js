import React from 'react';
import ProjectCard from './ProjectCard';
import emoji from "react-easy-emoji";

export default function Projects() {
  const projects = {
    display: true,
    withAchievements: true,
    list: [
      {
        projectName: "Doxide",
        startDate: "Dec 2021",
        endDate: "Mar 2022",
        tags: ["TypeScript", "Individual"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/doxide"
          }
        ],
        descriptions: ["🚧 Work in progress", "A VSCode extension that automatically generates code documentation, such as comments and docstrings, using OpenAI-Codex."]
      },
      {
        projectName: "Algorithms Visualiser",
        startDate: "Dec 2021",
        endDate: "Feb 2022",
        tags: ["HTML", "CSS", "JavaScript", "ReactJS", "Individual"],
        links: [
          {
            name: "Demo",
            url: "https://chuahxinyu.github.io/algorithms-visualiser/"
          },
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/algorithms-visualiser"
          }
        ],
        descriptions: ["🚧 Work in progress", "A web application visualising 5 (and counting) data structures and algorithms; provided multiple visualisation settings as well as step‑by‑step explanations describing how each algorithm works and its best, worst and average cases and time complexities.", emoji("🏆 Won Best Tech (Individual) at SummerHack 2022, organised by CISSA")]
      },
      {
        projectName: "12 Days of Christmas",
        startDate: "",
        endDate: "Dec 2021",
        tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
        links: [
          {
            name: "Devpost",
            url: "https://devpost.com/software/12-days-of-christmas-with-us-adi37s"
          }
        ],
        descriptions: [emoji("🏆 Won 'Best Holiday Dressed' at Hacky Winterland, organised by MLH")]
      },
      {
        projectName: "ChromaWorld",
        startDate: "",
        endDate: "Dec 2021",
        tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
        links: [
          {
            name: "Devpost",
            url: "https://devpost.com/software/travel-in-colours"
          }
        ],
        descriptions: [emoji("🏆 Won 'Lost Treasure Hack' at MapHacks, organised by MLH")]
      },
      {
        projectName: "BYOCC",
        startDate: "",
        endDate: "Nov 2021",
        tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
        links: [
          {
            name: "Devpost",
            url: "https://devpost.com/software/byocc"
          }
        ],
        descriptions: [emoji("🏆 Won 'Second Place' and 'Best Design' at HackVision 2021, organised by GSOC RMIT")]
      },
      {
        projectName: "First Aid Game Concept, Design and Prototype",
        startDate: "Sep 2021",
        endDate: "Oct 2021",
        tags: ["HTML", "CSS", "JavaScript", "ReactJS", "Blender", "Godot", "Python", "GDScript", "Individual"],
        links: [
          {
            name: "Demo",
            url: "https://chuahxinyu.github.io/firstaidgame/"
          },
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/firstaidgame"
          }
        ],
        descriptions: ["Pitched a game concept through a point‑and‑click interactive website, informing the user about the game as well as highlighting the importance of first aid. Constructed a prototype of the game with custom 3D modelled objects and interactable elements."]
      },
      {
        projectName: "Chckers Game and Player",
        startDate: "Sep 2021",
        endDate: "Oct 2021",
        tags: ["C", "Individual"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/cli-checkers"
          }
        ],
        descriptions: []
      },
      {
        projectName: "trashwith.us",
        startDate: "",
        endDate: "Sep 2021",
        tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
        links: [
          {
            name: "Devpost",
            url: "https://devpost.com/software/trashwith-us"
          }
        ],
        descriptions: [emoji("🏆 Won 'World Peace Hack' at Peace Out Hacks, organised by MLH")]
      },
      {
        projectName: "Python Space Invaders Game and AI Player",
        startDate: "",
        endDate: "Sep 2021",
        tags: ["Python", "PyGame", "NEAT-Python", "Teamwork"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/DecodED2-Project"
          }
        ],
        descriptions: ["Collaborated with a team to create a Python Space Invaders game with object‑oriented programming principles and integrated Neuroevolution of Augmenting Topologies (NEAT) Algorithm; co‑hosted a workshop about AI, NEAT and neural networks with >30 participants."]
      },
      {
        projectName: "Python Card Game and Bot Player",
        startDate: "",
        endDate: "Jul 2021",
        tags: ["Python", "Individual"],
        links: [
          {
            name: "GitHub",
            url: "https://github.com/chuahxinyu/cli-phazed"
          }
        ],
        descriptions: []
      },
    ]
  };

  if (projects.display === false) return null;

  return (
    <div className='projects-container'>
      {projects.list.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            index={index}
          />
        )
      })}
    </div>
  );
}
