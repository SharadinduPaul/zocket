import React from "react";
import { ContentLayout } from "../../global";

interface PageNotAvailableProps {
  title?: string;
}
export const PageNotAvailable = ({
  title = "Page not available!",
}: PageNotAvailableProps) => {
  return (
    <ContentLayout>
      <main>{title}</main>
    </ContentLayout>
  );
};
