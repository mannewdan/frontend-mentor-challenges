import React from "react";

type FormTemplateProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  danger?: boolean;
};

export default function FormTemplate({
  title,
  children,
  className,
  danger,
}: FormTemplateProps) {
  return (
    <form className={`form ${className ? className : ""}`} autoComplete="off">
      <div className="scrollable-area">
        <h3 className={`text-h-l ${danger ? "c-text-danger" : ""}`}>{title}</h3>

        {children}
      </div>
    </form>
  );
}
