import React from "react";
import { Link } from "@mui/material";

interface UsefulLinkProps {
  label: string;
  url: string;
}

const UsefulLink: React.FC<UsefulLinkProps> = ({ label, url }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </Link>
    </li>
  );
};

export default UsefulLink;