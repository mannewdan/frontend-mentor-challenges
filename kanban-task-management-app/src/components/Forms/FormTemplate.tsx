import React from "react";
import DotMenu from "../DotMenu";

type FormTemplateProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  danger?: boolean;
  dotButtons?: Array<{ name: string; onClick: () => void; danger?: boolean }>;
};

export default function FormTemplate({
  title,
  children,
  className,
  danger,
  dotButtons,
}: FormTemplateProps) {
  return (
    <form className={`form ${className ? className : ""}`} autoComplete="off">
      <div className="scrollable-area">
        {!dotButtons && (
          <h3 className={`text-h-l ${danger ? "c-text-danger" : ""}`}>
            {title}
          </h3>
        )}

        {dotButtons && (
          <div className="title-container">
            <h3 className={`text-h-l ${danger ? "c-text-danger" : ""}`}>
              {title}
            </h3>

            <DotMenu buttons={dotButtons} shorterDistance={true} />
          </div>
        )}

        {children}
      </div>
    </form>
  );
}
