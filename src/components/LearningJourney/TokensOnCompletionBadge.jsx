import { CashIcon } from "@heroicons/react/outline";

const TokensOnCompletionBadge = ({ tokens }) => {
  return (
    <div className="badge badge-info flex">
      <CashIcon className="h-4 w-4 mr-1" />
      {tokens} Level1 tokens on completion
    </div>
  );
};

export default TokensOnCompletionBadge;
