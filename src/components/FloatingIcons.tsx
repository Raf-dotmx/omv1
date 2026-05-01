interface TechIcon {
  className: string;
  title: string;
  top: string;
  side: "left" | "right";
  offset: string;
  dur: string;
  delay: string;
}

const icons: TechIcon[] = [
  { className: "devicon-react-original colored",    title: "React",      side: "left",  top: "8%",  offset: "4%", dur: "3.8s", delay: "0s"   },
  { className: "devicon-angularjs-plain colored",   title: "Angular",    side: "left",  top: "30%", offset: "6%", dur: "4.5s", delay: ".7s"  },
  { className: "devicon-nodejs-plain colored",      title: "Node.js",    side: "left",  top: "54%", offset: "4%", dur: "5.1s", delay: "1.3s" },
  { className: "devicon-postgresql-plain colored",  title: "PostgreSQL", side: "left",  top: "76%", offset: "6%", dur: "3.6s", delay: ".3s"  },
  { className: "devicon-python-plain colored",      title: "Python",     side: "right", top: "8%",  offset: "4%", dur: "4.9s", delay: "1s"   },
  { className: "devicon-csharp-plain colored",      title: "C#",         side: "right", top: "30%", offset: "6%", dur: "3.9s", delay: ".5s"  },
  { className: "devicon-typescript-plain colored",  title: "TypeScript", side: "right", top: "54%", offset: "4%", dur: "4.3s", delay: "1.6s" },
  { className: "devicon-blender-original colored",  title: "Blender",    side: "right", top: "76%", offset: "6%", dur: "5.2s", delay: ".2s"  },
];

function FloatingIcons() {
  return (
    <>
      {icons.map(({ className, title, side, top, offset, dur, delay }) => (
        <div
          key={title}
          className="tech-icon"
          title={title}
          style={{
            top,
            [side]: offset,
            ["--dur" as any]: dur,
            ["--delay" as any]: delay,
          }}
        >
          <i className={className} />
        </div>
      ))}
    </>
  );
}

export default FloatingIcons;