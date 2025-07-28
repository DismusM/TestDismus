'use client';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Stack, 
  Paper, 
  Avatar, 
  ActionIcon,
  Box,
  Flex,
  Grid,
  Card,
  Badge,
  useMantineTheme,
  useComputedColorScheme,
  rem
} from '@mantine/core';
import { 
  IconBrandGithub, 
  IconMail, 
  IconWorld, 
  IconSun, 
  IconMoon,
  IconBrandBubble,
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconRocket
} from '@tabler/icons-react';
import { useColorScheme } from '@mantine/hooks';

export default function Home() {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme('light');
  const { toggleColorScheme } = useColorScheme();

  const skills = [
    { name: 'Bubble.io', level: 95, icon: IconBrandBubble, color: 'custom-blue' },
    { name: 'UI/UX Design', level: 85, icon: IconPalette, color: 'custom-teal' },
    { name: 'API Integration', level: 90, icon: IconCode, color: 'custom-orange' },
    { name: 'Responsive Design', level: 88, icon: IconDeviceMobile, color: 'custom-blue' },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-featured e-commerce solution with payment processing and inventory management.',
      tech: ['Bubble.io', 'Stripe', 'Responsive'],
      image: '/project1.jpg',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tech: ['Bubble.io', 'Real-time', 'Team Collaboration'],
      image: '/project2.jpg',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with custom animations and responsive design.',
      tech: ['Bubble.io', 'Custom CSS', 'Animations'],
      image: '/project3.jpg',
      link: '#'
    }
  ];

  return (
    <Box>
      {/* Hero Section with Gradient Background */}
      <Box
        style={{
          background: theme.other.gradients.primary,
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Parallax Background Elements */}
        <Box
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />

        {/* Navigation */}
        <Flex justify="space-between" align="center" p="lg" style={{ position: 'relative', zIndex: 10 }}>
          <Group>
            <IconBrandBubble size={32} color="white" />
            <Text size="lg" fw={700} c="white">Dismus Mumanthi</Text>
          </Group>
          
          <Group>
            <Button variant="subtle" color="white" size="sm">Home</Button>
            <Button variant="subtle" color="white" size="sm">Projects</Button>
            <Button variant="subtle" color="white" size="sm">About</Button>
            <Button variant="subtle" color="white" size="sm">Contact</Button>
            <ActionIcon
              variant="subtle"
              color="white"
              onClick={() => toggleColorScheme()}
              size="lg"
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>
          </Group>
        </Flex>

        {/* Hero Content */}
        <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
          <Stack align="center" justify="center" style={{ minHeight: '80vh' }} gap="xl">
            <Avatar 
              src="/bubbleio-logo.png" 
              size={120} 
              radius={120} 
              alt="Bubble.io Logo"
              style={{
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            />
            
            <Title 
              order={1} 
              ta="center" 
              fw={700} 
              size="3.5rem"
              c="white"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              Crafting No-Code Magic with{' '}
              <Text component="span" c="white" fw={800}>Bubble</Text>
            </Title>
            
            <Text 
              ta="center" 
              size="xl" 
              c="white" 
              lh={1.6}
              maw={600}
              style={{ opacity: 0.9 }}
            >
              I build stunning, scalable web applications that transform ideas into reality. 
              Specializing in no-code solutions that deliver exceptional user experiences.
            </Text>
            
            <Group gap="lg" justify="center">
              <Button
                size="lg"
                radius="xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                  }
                }}
                leftSection={<IconRocket size={20} />}
              >
                See My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                radius="xl"
                color="white"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  }
                }}
                leftSection={<IconMail size={20} />}
              >
                Get In Touch
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container size="lg" py={80}>
        <Stack gap="xl">
          <Title order={2} ta="center" fw={700}>
            My Expertise
          </Title>
          
          <Grid gutter="lg">
            {skills.map((skill, index) => (
              <Grid.Col key={skill.name} span={{ base: 12, sm: 6, md: 3 }}>
                <Card 
                  shadow="md" 
                  padding="xl" 
                  radius="lg"
                  style={{
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows.lg,
                    }
                  }}
                >
                  <skill.icon size={48} color={theme.colors[skill.color][4]} />
                  <Text fw={600} size="lg" mt="md">{skill.name}</Text>
                  <Text c="dimmed" size="sm" mt="xs">{skill.level}%</Text>
                  
                  {/* Progress Bar */}
                  <Box 
                    mt="md" 
                    style={{
                      width: '100%',
                      height: '8px',
                      background: theme.colors.gray[2],
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: theme.other.gradients.primary,
                        transition: 'width 1s ease-in-out',
                      }}
                    />
                  </Box>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* Projects Section */}
      <Box style={{ background: theme.colors.gray[0] }} py={80}>
        <Container size="lg">
          <Stack gap="xl">
            <Title order={2} ta="center" fw={700}>
              Featured Projects
            </Title>
            
            <Grid gutter="xl">
              {projects.map((project, index) => (
                <Grid.Col key={project.title} span={{ base: 12, md: 4 }}>
                  <Card 
                    shadow="md" 
                    padding="xl" 
                    radius="lg"
                    style={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows.xl,
                      }
                    }}
                  >
                    <Box
                      style={{
                        height: '200px',
                        background: theme.other.gradients.secondary,
                        borderRadius: theme.radius.md,
                        marginBottom: theme.spacing.md,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconBrandBubble size={64} color="white" />
                    </Box>
                    
                    <Title order={3} fw={600} mb="sm">
                      {project.title}
                    </Title>
                    
                    <Text c="dimmed" lh={1.6} mb="md">
                      {project.description}
                    </Text>
                    
                    <Group gap="xs" mb="lg">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="light" color="custom-blue">
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                    
                    <Button 
                      variant="outline" 
                      color="custom-blue"
                      fullWidth
                      style={{
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: theme.colors['custom-blue'][0],
                        }
                      }}
                    >
                      View Project
                    </Button>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container size="md" py={80}>
        <Paper radius="lg" p="xl" shadow="md" withBorder>
          <Stack gap="xl" align="center">
            <Title order={2} ta="center" fw={700}>
              Let's Build Something Amazing Together
            </Title>
            
            <Text ta="center" size="lg" c="dimmed" lh={1.6} maw={600}>
              Ready to transform your ideas into a stunning web application? 
              Let's discuss your project and bring your vision to life.
            </Text>
            
            <Group gap="lg" justify="center">
              <Button
                size="lg"
                color="custom-blue"
                leftSection={<IconMail size={20} />}
                style={{
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows.lg,
                  }
                }}
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                color="custom-blue"
                leftSection={<IconBrandGithub size={20} />}
                style={{
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                View GitHub
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>

      {/* Footer */}
      <Box 
        py={40} 
        style={{ 
          background: theme.colors.dark[8],
          borderTop: `1px solid ${theme.colors.gray[3]}` 
        }}
      >
        <Container size="lg">
          <Flex justify="space-between" align="center">
            <Text c="dimmed" size="sm">
              © 2024 Dismus Mumanthi. Built with ❤️ using Bubble.io
            </Text>
            <Group gap="md">
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconBrandGithub size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconMail size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconWorld size={20} />
              </ActionIcon>
            </Group>
          </Flex>
        </Container>
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
}
