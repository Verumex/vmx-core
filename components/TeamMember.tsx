import { FC } from "react";

interface Props {
  name: string;
}

const TeamMember: FC<Props> = ({ name }) => (
  <div className="inline-block mr-4">
    <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">{name}</code>
  </div>
);

export default TeamMember;
