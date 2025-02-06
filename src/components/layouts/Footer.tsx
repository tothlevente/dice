import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";

import packageJson from "../../../package.json";

export default function Footer() {
  return (
    <div className="grid place-content-center place-items-center text-center mt-8">
      <p>This website is open-source and licensed under the MIT.</p>
      <p>
        This website does not use cookies and does not collect data about
        you.
      </p>
      <p>For more information, please visit the project repository.</p>
      <p>Thank you for your visit and interest! 👍️</p>
      <p>Created by Levente in 2025 | v{packageJson.version}</p>
      <div className="flex flex-row p-2.5">
        <Button asChild>
          <a
            href={packageJson.repository}
            target="_blank"
            className="w-[130px] mr-2"
          >
            <ExternalLinkIcon />
            Repository
          </a>
        </Button>
        <Button asChild>
          <a
            href={packageJson.repository + "/blob/main/LICENSE"}
            target="_blank"
            className="w-[130px] mr-2"
          >
            <ExternalLinkIcon />
            License
          </a>
        </Button>
      </div>
      <a
        href="https://www.netlify.com"
        target="_blank"
        style={{ paddingBottom: "10px" }}
      >
        <img
          src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </div>
  );
}
