import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center gap-4">
      <a
            href="https://www.linkedin.com/in/daniela-ramirez-developer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/icons/linkedin_color.svg"
              alt="LinkedIn"
              class="h-7 w-7 hover:opacity-80"
            />
      </a>

      <a
            href="https://github.com/DanyRAAD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/icons/github_color.svg"
              alt="GitHub"
              class="h-7 w-7 hover:opacity-80"
            />
      </a>

      <a
            href="https://www.artstation.com/danyraad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ArtStation"
          >
            <img
              src="/icons/artstation_color.svg"
              alt="ArtStation"
              class="h-7 w-7 hover:opacity-80"
            />
      </a>

      <a
            href="https://www.youtube.com/@Ing.DanielaRamirez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src="/icons/youtube_color.svg"
              alt="YouTube"
              class="h-7 w-7 hover:opacity-80"
            />
      </a>

    </div>
  );
};

export default SocialIcons;
