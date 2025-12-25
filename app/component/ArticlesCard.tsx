'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, Stack } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


// TYPES
interface ArticleCardItem {
    thumbnail: string;
    category: string;
    date: string;
    title: string;
    link: string;
}

// Props
interface ArticleCardProps {
    data: ArticleCardItem;
}

export function ArticleCard({ data }: ArticleCardProps) {
    return (
        <Link href={data.link}>
            <Box
                height="100%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap="12px"
                sx={{
                    cursor: "pointer",
                }}
            >
                {/* Thumbnail Image */}
                <Box
                    position="relative"
                    width="100%"
                    borderRadius={{ xs: "12px", md: "16px" }}
                    overflow="hidden"
                    mb={1}
                    sx={{
                        aspectRatio: '424 / 240',
                        transition: "all 0.4s ease",

                        '&:hover': {
                            filter: 'brightness(0.8)',
                        }
                    }}
                >
                    <Image
                        src={data.thumbnail}
                        alt={data.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Box>

                {/* Category & Date */}
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Typography variant="subtitle4" fontWeight={600} color="#2E44E3">
                        {data.category}
                    </Typography>
                    <Typography variant="subtitle4" color="text.disabled">
                        •
                    </Typography>
                    <Typography variant="subtitle4" fontWeight={600} color="#2E2E2E">
                        {data.date}
                    </Typography>
                </Stack>

                {/* Title */}
                <Typography variant="buttonL" fontWeight={600} mb={1} flexGrow={1}>
                    {data.title}
                </Typography>

                {/* Read More Link */}
                <Button
                    endIcon={<OpenInNewIcon sx={{ color: "#2E44E3" }} />}
                    sx={{
                        p: 0,
                        mt: 'auto',
                        textTransform: 'none',
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                    disableRipple
                >
                    <Typography variant="buttonM" fontWeight={600} color="#2E44E3">Read more</Typography>
                </Button>
            </Box>
        </Link>
    );
};