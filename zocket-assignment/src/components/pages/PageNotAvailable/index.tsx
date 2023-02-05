import React from "react";
import { ContentLayout } from "../../global";

interface PageNotAvailableProps {
  title?: string;
  children?: any;
}
export const PageNotAvailable = ({
  title = "Page not available!",
  children,
}: PageNotAvailableProps) => {
  return (
    <ContentLayout>
      <main>
        {title}
        {children}
      </main>
    </ContentLayout>
  );
};
