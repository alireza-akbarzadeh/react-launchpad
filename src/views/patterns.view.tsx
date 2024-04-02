import { IconButton } from "components/ui/button/icon-button";
import { Icon } from "components/ui/icon";
import { SignUp } from "domains";

const PatternsView = () => {
  return (
    <div>
      <SignUp />
      <IconButton iconName="User"  />
    </div>
  );
};

export default PatternsView;
