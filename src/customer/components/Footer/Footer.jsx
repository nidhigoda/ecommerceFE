import React from "react";
import { Button, Grid, Typography,Link } from '@mui/material';


const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: '3' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Jobs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Partner</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Marketing</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Insights</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Support</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Partner</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>API Status</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Claim</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterbottom>Terms</Button>
                    </div>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">2024 My Company. All rights reserved</Typography>
                    <Typography variant="body2" component="p" align="center">Made with love by Me.</Typography>
                    <Typography variant="body2" component="p" align="center">Icons made by{' '}<Link href="https://www.freepik.com" color="inherit" underline="always">
                        Freepik{' '}</Link>
                         from {' '}
                        <Link href="https://www.flaticon.com" color="inherit" underline="always">www.flaticon.com</Link></Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer