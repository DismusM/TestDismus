'use client';
import { Container, Title, Text, Button, Group, Stack, Paper, Avatar } from '@mantine/core';
import { IconBrandGithub, IconMail, IconWorld } from '@tabler/icons-react';

export default function Home() {
  return (
    <Container size="md" py={60}>
      <Paper radius="lg" p="xl" shadow="md" withBorder>
        <Stack gap="xl" align="center">
          <Avatar src="/bubbleio-logo.png" size={100} radius={100} alt="Bubble.io Logo" />
          <Title order={1} ta="center">
            Hi, I’m <span style={{ color: '#228be6' }}>Your Name</span>
          </Title>
          <Text ta="center" size="lg" c="dimmed">
            Bubble.io Developer | No-Code Expert | Web App Specialist
          </Text>
          <Text ta="center" size="md">
            I build powerful, scalable, and beautiful web applications using Bubble.io and modern web technologies. Let’s bring your ideas to life with no-code solutions!
          </Text>
          <Group gap="md" justify="center">
            <Button
              component="a"
              href="mailto:your@email.com"
              leftSection={<IconMail size={18} />}
              size="md"
              color="blue"
            >
              Contact Me
            </Button>
            <Button
              component="a"
              href="https://github.com/your-github"
              leftSection={<IconBrandGithub size={18} />}
              size="md"
              variant="outline"
              color="dark"
              target="_blank"
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
            >
              Portfolio
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
