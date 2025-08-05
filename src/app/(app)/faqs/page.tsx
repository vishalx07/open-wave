import NextLink from "next/link";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardContent,
  Text,
} from "@jamsr-ui/react";
import { FAQS } from "./data";

export default function page() {
  return (
    <section className="mx-auto max-w-3xl">
      <article className="space-y-12">
        <header className="space-y-4">
          <Text
            as="h1"
            variant="h2"
            className="text-center"
          >
            Frequently Asked Questions
          </Text>
          <Text
            variant="body1"
            className="text-foreground-secondary mx-auto max-w-2xl text-center"
          >
            Find answers to common questions about our products and services. If
            you can't find what you're looking for, please contact our support
            team.
          </Text>
        </header>

        <main className="space-y-12">
          {FAQS.map(({ category, faqs }) => {
            return (
              <div
                key={category}
                className="space-y-4"
              >
                <Text
                  as="h3"
                  variant="h4"
                  className="text-center"
                >
                  {category}
                </Text>

                <Accordion
                  radius="2xl"
                  variant="splitted"
                >
                  {faqs.map((faq) => {
                    const { question, answer } = faq;
                    return (
                      <AccordionItem
                        key={question}
                        heading={question}
                        classNames={{
                          base: "bg-content2",
                          trigger: "cursor-pointer",
                        }}
                      >
                        {answer}
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            );
          })}
        </main>

        <footer>
          <Card className="bg-content2">
            <CardContent className="flex flex-col items-center gap-4">
              <div className="space-y-2">
                <Text
                  as="h5"
                  variant="h5"
                  className="text-center"
                >
                  Still have questions?
                </Text>
                <Text
                  as="p"
                  variant="paragraph"
                  className="text-foreground-secondary text-center"
                >
                  Our support team is here to help you with any other questions
                  you might have.
                </Text>
              </div>

              <Button
                as={NextLink}
                href={"#"}
                color="primary"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </footer>
      </article>
    </section>
  );
}
