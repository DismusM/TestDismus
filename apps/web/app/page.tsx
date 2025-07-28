'use client';
import { Container, Title, Text, Button, Group, Stack, Paper, Avatar } from '@mantine/core';
import { IconBrandGithub, IconMail, IconWorld } from '@tabler/icons-react';

export default function Home() {
  return (
    <Container size="md" py={60}>
      <Paper radius="lg" p="xl" shadow="md" withBorder>
        <Stack gap="xl" align="center">
          <Avatar src="/bubbleio-logo.png" size={100} radius={100} alt="Bubble.io Logo" />
          
          <Title order={1} ta="center" fw={700}>
            Hi, I'm <Text component="span" c="custom-blue.4" fw={700}>Dismus Mumanthi</Text>
          </Title>
          
          <Text ta="center" size="lg" c="dimmed" lh={1.5}>
            <Text component="span" c="custom-blue.4" fw={600}>Bubble Developer</Text> | No-Code Expert | Web App Specialist
          </Text>
          
          <Text ta="center" size="md" lh={1.5} maw={600}>
            I build powerful, scalable, and beautiful web applications using Bubble.io and modern web technologies. 
            Let's bring your ideas to life with no-code solutions!
          </Text>
          
          <Group gap="md" justify="center">
            <Button
              component="a"
              href="mailto:your@email.com"
              leftSection={<IconMail size={18} />}
              size="md"
              color="custom-blue"
              fw={600}
            >
              Contact Me
            </Button>
            <Button
              component="a"
              href="https://github.com/DismusM"
              leftSection={<IconBrandGithub size={18} />}
              size="md"
              variant="outline"
              color="dark"
              target="_blank"
              fw={600}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://your-website.com"
              leftSection={<IconWorld size={18} />}
              size="md"
              variant="subtle"
              color="gray"
              target="_blank"
              fw={600}
            >
              Portfolio
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
