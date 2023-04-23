import React from "react";

type FormTemplateProps = {
  title: string;
  children: React.ReactNode;
};

export default function FormTemplate({ title, children }: FormTemplateProps) {
  return (
    <form className="form" autoComplete="off">
      <div className="scrollable-area">
        <h3 className="text-h-l">{title}</h3>

        {children}
      </div>
    </form>
  );
}
