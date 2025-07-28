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
  rem,
  Modal,
  TextInput,
  Textarea,
  Select,
  Divider
} from '@mantine/core';
import { 
  IconBrandGithub, 
  IconMail, 
  IconBrandX,
  IconBrandBumble,
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconRocket,
  IconExternalLink,
  IconCalendar,
  IconUsers,
  IconChartBar,
  IconHeart,
  IconTarget,
  IconAward,
  IconBulb
} from '@tabler/icons-react';
import { useRef, useState } from 'react';

export default function Home() {
  const theme = useMantineTheme();
  const colorScheme = useComputedColorScheme('light');
  
  // Refs for smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Modal states
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const skills = [
    { name: 'Bubble.io', level: 95, icon: IconBrandBumble, color: 'custom-blue' },
    { name: 'UI/UX Design', level: 85, icon: IconPalette, color: 'custom-teal' },
    { name: 'API Integration', level: 90, icon: IconCode, color: 'custom-orange' },
    { name: 'Responsive Design', level: 88, icon: IconDeviceMobile, color: 'custom-blue' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Built a full-featured e-commerce solution with payment processing and inventory management.',
      fullDescription: 'A comprehensive e-commerce platform built with Bubble.io featuring Stripe payment integration, real-time inventory management, user authentication, order tracking, and admin dashboard. The platform supports multiple payment methods, automated email notifications, and responsive design for all devices.',
      tech: ['Bubble.io', 'Stripe', 'Responsive'],
      image: '/project1.jpg',
      link: '#',
      features: ['Payment Processing', 'Inventory Management', 'User Authentication', 'Order Tracking', 'Admin Dashboard'],
      duration: '3 months',
      team: 'Solo Developer'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      fullDescription: 'A collaborative task management application designed for teams to organize projects, assign tasks, track progress, and communicate effectively. Features include real-time updates, file sharing, time tracking, and comprehensive reporting.',
      tech: ['Bubble.io', 'Real-time', 'Team Collaboration'],
      image: '/project2.jpg',
      link: '#',
      features: ['Real-time Updates', 'File Sharing', 'Time Tracking', 'Team Chat', 'Progress Reports'],
      duration: '2.5 months',
      team: 'Solo Developer'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with custom animations and responsive design.',
      fullDescription: 'A stunning portfolio website showcasing professional work with smooth animations, interactive elements, and fully responsive design. Built with modern web technologies and optimized for performance.',
      tech: ['Bubble.io', 'Custom CSS', 'Animations'],
      image: '/project3.jpg',
      link: '#',
      features: ['Custom Animations', 'Responsive Design', 'Performance Optimized', 'SEO Friendly', 'Contact Forms'],
      duration: '1 month',
      team: 'Solo Developer'
    },
    {
      id: 4,
      title: 'CRM System',
      description: 'Customer relationship management system with lead tracking and analytics.',
      fullDescription: 'A comprehensive CRM system designed for businesses to manage customer relationships, track leads, monitor sales pipelines, and generate detailed analytics reports. Includes automated workflows and email marketing integration.',
      tech: ['Bubble.io', 'Analytics', 'Email Integration'],
      image: '/project4.jpg',
      link: '#',
      features: ['Lead Management', 'Sales Pipeline', 'Analytics Dashboard', 'Email Marketing', 'Automated Workflows'],
      duration: '4 months',
      team: 'Solo Developer'
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Educational platform with course management and student progress tracking.',
      fullDescription: 'A complete learning management system for educational institutions featuring course creation, student enrollment, progress tracking, assessments, and interactive learning materials.',
      tech: ['Bubble.io', 'Video Integration', 'Assessment Tools'],
      image: '/project5.jpg',
      link: '#',
      features: ['Course Management', 'Student Progress', 'Video Lessons', 'Assessments', 'Certificates'],
      duration: '5 months',
      team: 'Solo Developer'
    },
    {
      id: 6,
      title: 'Healthcare Appointment System',
      description: 'Medical appointment booking system with patient management and scheduling.',
      fullDescription: 'A healthcare appointment management system designed for medical practices to streamline patient scheduling, manage medical records, send appointment reminders, and handle billing.',
      tech: ['Bubble.io', 'HIPAA Compliant', 'SMS Integration'],
      image: '/project6.jpg',
      link: '#',
      features: ['Appointment Booking', 'Patient Records', 'SMS Reminders', 'Billing Integration', 'HIPAA Compliance'],
      duration: '3.5 months',
      team: 'Solo Developer'
    }
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  return (
    <Box>
      {/* Hero Section with Gradient Background */}
      <Box
        ref={homeRef}
        style={{
          background: theme.other?.gradients?.primary || 'linear-gradient(135deg, #3B82F6 0%, #26D4C4 100%)',
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
            <IconBrandBumble size={32} color="white" />
            <Text size="lg" fw={700} c="white">Dismus Mumanthi</Text>
          </Group>
          
          <Group>
            <Button 
              variant="subtle" 
              color="white" 
              size="sm"
              onClick={() => scrollToSection(projectsRef)}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </Button>
            <Button 
              variant="subtle" 
              color="white" 
              size="sm"
              onClick={() => scrollToSection(aboutRef)}
              style={{ cursor: 'pointer' }}
            >
              About
            </Button>
            <Button 
              variant="subtle" 
              color="white" 
              size="sm"
              onClick={() => scrollToSection(contactRef)}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Button>
          </Group>
        </Flex>

        {/* Hero Content */}
        <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
          <Stack align="center" justify="center" style={{ minHeight: '80vh' }} gap="xl">
            <Avatar 
              size={120} 
              radius={120} 
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconBrandBumble size={64} color="white" />
            </Avatar>
            
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
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                  }
                }}
                leftSection={<IconRocket size={20} />}
                onClick={() => scrollToSection(projectsRef)}
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
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  }
                }}
                leftSection={<IconMail size={20} />}
                onClick={() => scrollToSection(contactRef)}
              >
                Get In Touch
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box ref={aboutRef} style={{ background: theme.colors.gray[1] }} py={80}>
        <Container size="lg">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title order={2} fw={700} size="2.5rem">
                  About Me
                </Title>
                
                <Text size="lg" lh={1.7} c="dimmed">
                  I'm a passionate Bubble.io developer with over 3 years of experience creating 
                  powerful web applications that solve real-world problems. My journey in no-code 
                  development started with a simple idea: making technology accessible to everyone.
                </Text>
                
                <Text size="md" lh={1.6} c="dimmed">
                  I specialize in building scalable, user-friendly applications that not only look 
                  stunning but also deliver exceptional functionality. From e-commerce platforms to 
                  complex business systems, I've helped businesses of all sizes bring their digital 
                  visions to life.
                </Text>
                
                <Group gap="lg">
                  <Group gap="xs">
                    <IconHeart size={20} color={theme.colors['custom-blue']?.[4]} />
                    <Text size="sm" fw={600}>Passionate Developer</Text>
                  </Group>
                  <Group gap="xs">
                    <IconTarget size={20} color={theme.colors['custom-blue']?.[4]} />
                    <Text size="sm" fw={600}>Problem Solver</Text>
                  </Group>
                  <Group gap="xs">
                    <IconAward size={20} color={theme.colors['custom-blue']?.[4]} />
                    <Text size="sm" fw={600}>Quality Focused</Text>
                  </Group>
                </Group>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Card 
                  shadow="md" 
                  padding="xl" 
                  radius="lg"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                    color: 'white',
                  }}
                >
                  <Group gap="md" mb="md">
                    <IconBulb size={32} color="white" />
                    <Title order={3} c="white" fw={600}>My Approach</Title>
                  </Group>
                  <Text c="white" lh={1.6}>
                    I believe in creating solutions that are not just functional, but delightful to use. 
                    Every project starts with understanding your unique needs and ends with a product 
                    that exceeds expectations.
                  </Text>
                </Card>
                
                <Card 
                  shadow="md" 
                  padding="xl" 
                  radius="lg"
                  style={{
                    background: 'linear-gradient(135deg, #26D4C4 0%, #1fb8a8 100%)',
                    color: 'white',
                  }}
                >
                  <Group gap="md" mb="md">
                    <IconTarget size={32} color="white" />
                    <Title order={3} c="white" fw={600}>My Mission</Title>
                  </Group>
                  <Text c="white" lh={1.6}>
                    To democratize technology by making powerful web applications accessible to 
                    businesses and individuals through innovative no-code solutions.
                  </Text>
                </Card>
              </Stack>
            </Grid.Col>
          </Grid>
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
                  <skill.icon size={48} color={theme.colors[skill.color]?.[4] || theme.colors.blue[4]} />
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
                        background: theme.other?.gradients?.primary || 'linear-gradient(135deg, #3B82F6 0%, #26D4C4 100%)',
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
      <Box ref={projectsRef} style={{ background: theme.colors.gray[0] }} py={80}>
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
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                        '&::before': {
                          opacity: 1,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(38, 212, 196, 0.1) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        borderRadius: theme.radius.lg,
                        zIndex: -1,
                      }
                    }}
                    onClick={() => openProjectModal(project)}
                  >
                    <Box
                      style={{
                        height: '200px',
                        background: theme.other?.gradients?.secondary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                        borderRadius: theme.radius.md,
                        marginBottom: theme.spacing.md,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                        }
                      }}
                    >
                      <IconBrandBumble size={64} color="white" />
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
                          background: theme.colors['custom-blue']?.[0] || theme.colors.blue[0],
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box ref={contactRef}>
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
                  onClick={() => setContactModalOpen(true)}
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
      </Box>

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
              © 2024 Dismus Mumanthi
            </Text>
            <Group gap="md">
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconBrandGithub size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconMail size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconBrandX size={20} />
              </ActionIcon>
            </Group>
          </Flex>
        </Container>
      </Box>

      {/* Project Modal */}
      <Modal
        opened={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        title={selectedProject?.title}
        size="lg"
        centered
      >
        {selectedProject && (
          <Stack gap="lg">
            <Box
              style={{
                height: '200px',
                background: theme.other?.gradients?.secondary || 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                borderRadius: theme.radius.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconBrandBumble size={64} color="white" />
            </Box>
            
            <Text lh={1.6}>
              {selectedProject.fullDescription}
            </Text>
            
            <Divider />
            
            <Group gap="xs">
              {selectedProject.tech.map((tech: string) => (
                <Badge key={tech} variant="light" color="custom-blue">
                  {tech}
                </Badge>
              ))}
            </Group>
            
            <Group gap="md">
              <Group gap="xs">
                <IconCalendar size={16} />
                <Text size="sm" c="dimmed">Duration: {selectedProject.duration}</Text>
              </Group>
              <Group gap="xs">
                <IconUsers size={16} />
                <Text size="sm" c="dimmed">Team: {selectedProject.team}</Text>
              </Group>
            </Group>
            
            <Divider />
            
            <Stack gap="sm">
              <Text fw={600}>Key Features:</Text>
              {selectedProject.features.map((feature: string) => (
                <Group key={feature} gap="xs">
                  <IconChartBar size={16} color={theme.colors['custom-blue']?.[4]} />
                  <Text size="sm">{feature}</Text>
                </Group>
              ))}
            </Stack>
            
            <Group justify="flex-end" mt="md">
              <Button variant="outline" onClick={() => setProjectModalOpen(false)}>
                Close
              </Button>
              <Button color="custom-blue" leftSection={<IconExternalLink size={16} />}>
                View Live Demo
              </Button>
            </Group>
          </Stack>
        )}
      </Modal>

      {/* Contact Form Modal */}
      <Modal
        opened={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Start Your Project"
        size="md"
        centered
      >
        <Stack gap="lg">
          <Text c="dimmed">
            Tell me about your project and I'll get back to you within 24 hours.
          </Text>
          
          <TextInput
            label="Full Name"
            placeholder="Your full name"
            required
          />
          
          <TextInput
            label="Email"
            placeholder="your@email.com"
            type="email"
            required
          />
          
          <Select
            label="Project Type"
            placeholder="Select project type"
            data={[
              'E-commerce Platform',
              'Web Application',
              'Mobile App',
              'Dashboard/Admin Panel',
              'Portfolio Website',
              'CRM System',
              'Other'
            ]}
            required
          />
          
          <TextInput
            label="Budget Range"
            placeholder="e.g., $5,000 - $10,000"
          />
          
          <Textarea
            label="Project Description"
            placeholder="Describe your project requirements, goals, and any specific features you need..."
            minRows={4}
            required
          />
          
          <Group justify="flex-end" mt="md">
            <Button variant="outline" onClick={() => setContactModalOpen(false)}>
              Cancel
            </Button>
            <Button color="custom-blue" leftSection={<IconMail size={16} />}>
              Send Message
            </Button>
          </Group>
        </Stack>
      </Modal>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
}
