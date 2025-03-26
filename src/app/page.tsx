import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column, IconButton, LetterFx, Badge, Grid } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter, social } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import SocialButtons from "@/components/general/social/social";
// import TechCarousel from "@/components/general/home/carrousel";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="m">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="xs">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="s">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xs">
              {home.second_headline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
  
          <RevealFx translateY="12" delay={0.4} horizontal="space-between" gap="8" vertical="end" >
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
            <SocialButtons />
          </RevealFx>
        </Column>
      </Column>

      <RevealFx translateY="16" delay={0.6} >
        <Column>
          <Heading as="h2" variant="display-strong-xs" wrap="balance" align="center">
           {home.skillset_title}
          </Heading>
          <Grid fillWidth gap="l" columns="6" marginTop="40" >          
                  {home.skills.map((skill) => {
                    return <Badge 
                      title={skill.name}
                      icon={skill.icon}
                      arrow={false}
                    />
                  })}

              </Grid>                  
        </Column>
       
      </RevealFx>

      <RevealFx translateY="16" delay={0.6} gap="xl"  paddingLeft="l">
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {home.intro_title}
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.intro_text}
            </Text>
        {/* imagem descritiva dizendo o que eu faço */}
      </RevealFx>

      <RevealFx translateY="16" delay={0.6} gap="xl"  paddingLeft="l" align="center">
        <Column>
          <Heading as="h2" variant="display-strong-xs" wrap="balance" marginBottom="40">
                {home.projects_title}
          </Heading>
          <Projects range={[2]} />
        </Column>
       
      </RevealFx>


      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
    </Column>
  );
}
